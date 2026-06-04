---
name: 明曜長期照護網站專案
description: 明曜居家長照機構網站建置，品牌色彩、服務區域、功能需求等關鍵資訊
type: project
originSessionId: bdfeff05-05e0-4948-b4b1-c880b8fc033c
---
公司全名：明曜長期照護有限公司附設新北市私立明曜居家長照機構

**Why:** 負責人無網頁設計基礎，需要從零建立公司形象網站。
**How to apply:** 技術用純靜態 HTML/CSS/JS，可免費部署。

## 品牌資訊
- Logo：藍色房屋 icon + "Y" 字母（Teal色），Slogan: "Brighten Your Life"
- 品牌主色：深藍 #2a5a9e + Teal #0097a7（從 Logo 提取）
- 字體：Noto Sans TC

## 服務區域
- A單位（社區整合）：泰山區
- B單位（居家服務）：新莊、泰山、板橋、三重、五股、蘆洲、中和
- C碼（專業服務）：新莊、板橋、三重、中和

## 網站檔案
**正確路徑（一定要在這裡編輯！）：**
`C:\Users\YOKA\Desktop\claude\網頁製作\明曜網頁設計\.claude\worktrees\great-cori-43dd7a\`

- index.html, about.html, services.html, areas.html, knowledge.html, contact.html, recruit.html
- preview.html（舊版整合預覽）
- **preview-v2.html（主力新版，Tailwind 單頁 SVG 插畫，2026-06-03 大幅強化）**
- css/style.css, js/main.js, images/

**預覽入口（好找）：**
`C:\Users\YOKA\Desktop\claude\網頁製作\明曜網頁設計\網站預覽.html`
→ 雙擊即開，上方分頁籤切換 8 頁＋裝置寬度切換（桌機／平板／手機）

**不要動：** `長照服務指南.html`（那是不相關的另一個文件）

## 公司真實聯絡資訊（2026-05-17 已從名片/DM 取得）
- 負責人：李曜閣 主任（網站對外顯示「李主任」即可，不顯示全名）
- 電話：0968-767-607（主要）／0968-709-590（次要）
- 統一編號：90272122
- 地址：新北市新莊區中安街27號2樓之2
- Email：mingyau.care1966@gmail.com
- LINE 官方帳號：
  - @059hiyaq（照顧服務／專業服務 諮詢）
  - @390nykje（社區整合型中心 諮詢）
- 104 公司頁：https://www.104.com.tw/company/1a2x6bnfl9?jobsource=index_s_ac
- Logo 檔：已存於 images/logo.png（房子+Y icon 設計）

## 招募頁真實福利條件
- **拆帳 62.5%**（AA、BA、GA、SC 碼全折）— 同業最高，網站主打亮點
- 勞健保、團險皆有
- 年中／年終獎金、生日禮金、三節禮金
- 缺工獎勵金、推薦人員獎金、開案獎金
- 積分課程補助、免費積分課程、內訓課程
- 每年免費健檢
- 公司自有 A 單位，服務區域 A 單位皆有合作

## 仍待提供
- 公司宣傳照／團隊照（about-photo.jpg、hero-bg.jpg 等）
- Formspree 表單 ID（用於 contact.html 的諮詢表單）

## Canva 設計成果（2026-05-17）
- **首頁 Hero Banner**：Tiffany 淺青綠背景寬版橫幅，設計 ID: DAHJ5gItECo，編輯連結: https://www.canva.com/d/YVJ85fVIvgN79X4
- **服務介紹圖卡**：白底高質感正方形圖卡（參考台灣居護風格），設計 ID: DAHJ5jY0uxk，編輯連結: https://www.canva.com/d/r5MjdgXmuSXoMlK
- 圖卡需在 Canva 複製成 3 份分別填入 A/B/C 服務單位資訊，匯出後存至 `images/`

## Gemini AI 生圖成果（2026-05-17）
- **新北市服務區域地圖**：溫暖扁平插畫風，7個服務區域以青綠色（#0097a7）標示，各區有不同小圖示
  - 新莊區：打卡標誌（機構所在地，區域略大）
  - 泰山區：雙手守護愛心；五股區：小房子；蘆洲區：花朵；三重區：家庭人像；板橋區：聽診器；中和區：太陽
  - 右下角有「明曜居家長照機構」建築插圖，左下角有溫馨小屋
  - 已存至 `images/service-map.png`

## areas.html 目前結構（2026-05-17 更新）
- 全寬插畫地圖（`images/service-map.png`）
- A / B / C 三欄服務說明卡片（橫排）
- 諮詢 CTA 區塊（深藍底，含電話與表單連結）
- 已移除：舊版 CSS 繪製區塊圖、圖例格子、「各行政區服務內容」區塊

## 預覽檔
- `preview.html`：全站 6 頁整合為單一滾動預覽，方便逐區確認後修改
- `preview-v2.html`：**主力新版設計**（Tailwind CDN 單頁、SVG 插畫、波浪分隔、bg 交替 cream/mint/white）。使用者實際檢視的就是這份。

## preview-v2.html 區塊順序（2026-06-03 參考台灣居護 THN Buurtzorg 強化後）
Navbar → Hero → Stats Bar → 關於我們(about) → **照護理念(philosophy)** → 服務項目(services) → **服務流程(process)** → 為何選擇我們(why) → **專業團隊(team)** → 服務區域(areas) → **照護新知+常見問題(faq)** → CTA → Footer → 手機底部雙鍵列
- 2026-06-03 新增 5 區塊（★ 參考台灣居護）：
  - **照護理念**：「以人為本·在家安老」+ 同心圓照護模式圖（長者為中心→家庭→照服員/個管→跨專業團隊/社區）+ 三理念（在地深耕/自立支援/量身規劃）
  - **服務流程**：申請 4 步驟（撥打專線→到府評估→擬定計畫→開始服務）
  - **專業團隊**：8 種角色（個管督導/照服員/護理師/物理/職能/語言治療師/營養師/社工師）— 以角色呈現，未放假人頭
  - **照護新知**：3 卡連到 knowledge.html（申請資格/補助額度/輔具補助）
  - **常見問題 FAQ**：6 題 `<details>` 手風琴（補助/如何申請/資格/服務區域/外籍看護喘息/多久開始）
- 台灣居護招牌是「洋蔥式照護模式」，明曜版用自己的「同心圓·以人為本」精神相近但未照抄
- 注意：v2 的波浪 `<path fill>` 必須等於「下一個區塊」的 bg 色（cream #fdf8f3 / mint #f0fafa / white #ffffff / CTA前 #1e4278）

## 使用工具偏好
- 用戶使用 Canva MCP 製作設計素材，偏好 Tiffany 淺青綠色調 + 白底高質感風格
- 用戶使用 Gemini 生圖，偏好溫暖扁平插畫風（Warm Flat Illustration）

## 未完成 / 下次繼續
- [ ] 把 preview-v2.html 的 5 個新區塊同步寫回正式的 index.html（目前 index 還是舊版結構）
- [ ] 等媒體報導資料後補「媒體報導」區塊（聯合報、元氣網等，參考台灣居護格式）
- [ ] 等真實團隊照後補「專業團隊」真人照片（目前用角色文字卡呈現）
- [ ] 取得 Formspree 表單 ID 並填入 contact.html
- [ ] 確認照片素材（about-photo.jpg、hero-bg.jpg）後上傳替換佔位圖
- [ ] commit 本次成果（preview-v2 新區塊 + 網站預覽.html）並推上 GitHub / 建立 PR
  - 目前 branch: claude/great-cori-43dd7a（已有 1 commit，尚未推上 origin）
  - Remote repo: j880215-sys/mingyau1966

## 版本歷程
| 日期 | 主要變更 |
|---|---|
| 2026-05-17 | 從零建立全站 7 頁；填入真實聯絡資訊；Canva Hero Banner + 服務圖卡；Gemini 服務地圖；Logo mix-blend-mode 整合；62.5% 招募頁；建立 preview.html |
| 2026-06-03 | 建立 preview-v2.html（Tailwind SVG 插畫版）；參考台灣居護 THN Buurtzorg 新增 5 區塊（照護理念同心圓圖、服務流程 4 步驟、8 種專業團隊、照護新知 3 卡、FAQ 6 題手風琴）；建立「網站預覽.html」預覽入口（母資料夾根目錄，分頁籤＋裝置切換） |
