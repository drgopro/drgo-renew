#!/usr/bin/env bash
# 디자인 프리뷰 정적 빌드:
#  1) Payload 라우트((payload) 그룹)를 잠시 치우고
#  2) cacheComponents 전용 설정(export const instant)을 잠시 제거한 뒤
#  3) NEXT_PUBLIC_STATIC_PREVIEW=1 로 next build(output: export) → ./out 생성
# 빌드가 끝나면(실패해도) 원본 파일을 모두 복원한다.
set -euo pipefail
cd "$(dirname "$0")/.."

PAYLOAD_DIR="src/app/(payload)"
BACKUP_DIR=".preview-payload-backup"
FILES_BACKUP="$BACKUP_DIR/_instant-files"

restore() {
  if [ -d "$FILES_BACKUP" ]; then
    (cd "$FILES_BACKUP" && find . -type f) | while read -r f; do
      cp "$FILES_BACKUP/$f" "$f"
    done
    rm -rf "$FILES_BACKUP"
  fi
  if [ -d "$BACKUP_DIR/app" ]; then
    rm -rf "$PAYLOAD_DIR"
    mv "$BACKUP_DIR/app" "$PAYLOAD_DIR"
  fi
  rmdir "$BACKUP_DIR" 2>/dev/null || true
}
trap restore EXIT

rm -rf "$BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

# 1) (payload) 라우트 그룹 제외
if [ -d "$PAYLOAD_DIR" ]; then
  mv "$PAYLOAD_DIR" "$BACKUP_DIR/app"
fi

# 2) cacheComponents 전용 설정 제거/주입 (원본은 FILES_BACKUP에 백업)
SLUG_PAGE="src/app/(frontend)/cases/[slug]/page.tsx"
{ grep -rl "^export const instant" src/app 2>/dev/null; echo "$SLUG_PAGE"; } | sort -u | while read -r f; do
  [ -f "$f" ] || continue
  mkdir -p "$FILES_BACKUP/$(dirname "$f")"
  cp "$f" "$FILES_BACKUP/$f"
  # export const instant 는 cacheComponents 전용 → export 모드에서 빌드 에러
  sed -i '/^export const instant/d' "$f"
done

# 정적 내보내기엔 generateStaticParams 필수 → 샘플 슬러그 주입
cat >> "$SLUG_PAGE" <<'EOF'

// (build-preview.sh 주입) 정적 내보내기용 — 샘플 사례 경로 생성
export async function generateStaticParams() {
  const { sampleCases } = await import("@/lib/sample-cases");
  return sampleCases.map((c) => ({ slug: c.slug }));
}
EOF

# 3) 정적 내보내기 빌드
rm -rf out
NEXT_PUBLIC_STATIC_PREVIEW=1 PREVIEW_BASE_PATH="${PREVIEW_BASE_PATH:-}" npx next build

touch out/.nojekyll
echo "✔ 정적 프리뷰 빌드 완료: ./out (basePath: '${PREVIEW_BASE_PATH:-}')"
