<template>
  <div class="wrap_contianer">
    <div class="wrap_banner">
      <div class="bg">
        <h3>歡迎入駐ACB集團孵化中心</h3>
        <h5>
          集團創業中心為中小型創業者成立的專業服務機構，我們免費提供指導技術業務、管理諮詢等幫幫方案，專心做事、其他的您的專屬我們。
        </h5>
      </div>
    </div>
    <div class="wrap_main">
      <div class="top_wrap animate__animated animate__backInUp">
        <h3>孵化全面解決方案</h3>
      </div>
      <div class="con_main_wrap">
        <div class="list_wrap">
          <div class="list_item">
            <a-image
              :width="100"
              :height="100"
              src="https://www.antdv.com/#error"
              fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
            />
            <div class="list_item_con">
              <h5>直營模式</h5>
              <p>
                成立獨立的運營團隊，為集團重點戰略板塊，擁有最高管理權限與最優資源部署。直營平台還承擔著集團新技術應用與新渠道拓展的重大使命，所有產品均領先市場一個世代。
              </p>
              <a-button type="primary" size="large" class="cusButton">
                查看
                <SwapRightOutlined />
              </a-button>
            </div>
          </div>
          <div class="list_item">
            <a-image
              :width="100"
              :height="100"
              src="https://www.antdv.com/#error"
              fallback="data:image/png;base64,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"
            />
            <div class="list_item_con">
              <h5>直營模式</h5>
              <p>
                成立獨立的運營團隊，為集團重點戰略板塊，擁有最高管理權限與最優資源部署。直營平台還承擔著集團新技術應用與新渠道拓展的重大使命，所有產品均領先市場一個世代。
              </p>
              <a-button type="primary" size="large" class="cusButton">
                查看
                <SwapRightOutlined />
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_cooper">
      <div class="top_wrap animate__animated animate__backInUp">
        <h3>集團孵化中心</h3>
        <h5>六大孵化政策</h5>
      </div>
      <div class="con_cooper_wrap">
        <div class="list_wrap">
          <div class="list_item">
            <img src="@/assets/hatch/center-1.png" alt="" />
            <div class="list_item_con">
              <h5>合作意向洽谈</h5>
              <p>
                請與在我們的線客服聯繫溝通您的服務內容，選擇套餐服務方案，建立初步合作意向。
              </p>
            </div>
          </div>
          <div class="list_item">
            <img src="@/assets/hatch/center-1.png" alt="" />
            <div class="list_item_con">
              <h5>合作意向洽谈</h5>
              <p>
                請與在我們的線客服聯繫溝通您的服務內容，選擇套餐服務方案，建立初步合作意向。
              </p>
            </div>
          </div>
          <div class="list_item">
            <img src="@/assets/hatch/center-1.png" alt="" />
            <div class="list_item_con">
              <h5>合作意向洽谈</h5>
              <p>
                請與在我們的線客服聯繫溝通您的服務內容，選擇套餐服務方案，建立初步合作意向。
              </p>
            </div>
          </div>
          <div class="list_item">
            <img src="@/assets/hatch/center-1.png" alt="" />
            <div class="list_item_con">
              <h5>合作意向洽谈</h5>
              <p>
                請與在我們的線客服聯繫溝通您的服務內容，選擇套餐服務方案，建立初步合作意向。
              </p>
            </div>
          </div>
          <div class="list_item">
            <img src="@/assets/hatch/center-1.png" alt="" />
            <div class="list_item_con">
              <h5>合作意向洽谈</h5>
              <p>
                請與在我們的線客服聯繫溝通您的服務內容，選擇套餐服務方案，建立初步合作意向。
              </p>
            </div>
          </div>
          <div class="list_item">
            <img src="@/assets/hatch/center-1.png" alt="" />
            <div class="list_item_con">
              <h5>合作意向洽谈</h5>
              <p>
                請與在我們的線客服聯繫溝通您的服務內容，選擇套餐服務方案，建立初步合作意向。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_demo">
      <div class="wrap_demo_top animate__animated animate__backInUp">
        <h3>入驻流程</h3>
      </div>
      <div class="con_wrap_demo">
        <div class="list_wrap">
          <div class="list_item list_item_1">
            <img class="cusImg" src="@/assets/hatch/process-1.png" alt="" />
            <div class="list-item-con">
              <h5>在線申請</h5>
              <p>在線填寫申請入駐表</p>
            </div>
          </div>
          <div class="list_item list_item_2">
            <img class="cusImg" src="@/assets/hatch/process-1.png" alt="" />
            <div class="list-item-con">
              <h5>在線申請</h5>
              <p>收到您的申請表後我們會審核您的資質</p>
            </div>
          </div>
          <div class="list_item list_item_3">
            <img class="cusImg" src="@/assets/hatch/process-1.png" alt="" />
            <div class="list-item-con">
              <h5>在線申請</h5>
              <p>妥善準備後等您入駐後開始提供對應的扶持和服務</p>
            </div>
          </div>
          <img src="@/assets/hatch/icon-right.png" class="list_ico list1" alt="" />
          <img src="@/assets/hatch/icon-right.png" class="list_ico list2" alt="" />
        </div>
      </div>
    </div>
    <div class="wrap_yongjin">
      <div class="wrap_demo_top animate__animated animate__backInUp">
        <h3>佣金政策</h3>
        <h5>佣金比例根據活躍玩家數與當月盈利升級</h5>
      </div>
      <div class="con_wrap_yongjin">
        <div class="header-list">
          <div>佣金等級</div>
          <div>當月收益</div>
          <div>活躍會員</div>
          <div>佣金比例</div>
        </div>
        <div class="list-wrap">
          <div class="list-item">
            <div class="column">6</div>
            <div class="column">&gt;1,000,000</div>
            <div class="column">50</div>
            <div class="column">55%</div>
          </div>
          <div class="list-item active">
            <div class="column">5</div>
            <div class="column">500,001-1,000,000</div>
            <div class="column">35</div>
            <div class="column">50%</div>
          </div>
          <div class="list-item">
            <div class="column">4</div>
            <div class="column">300,001-500,000</div>
            <div class="column">25</div>
            <div class="column">45%</div>
          </div>
          <div class="list-item active">
            <div class="column">3</div>
            <div class="column">150,001-300,000</div>
            <div class="column">25</div>
            <div class="column">40%</div>
          </div>
          <div class="list-item">
            <div class="column">2</div>
            <div class="column">40,001-150,000</div>
            <div class="column">25</div>
            <div class="column">35%</div>
          </div>
          <div class="list-item active">
            <div class="column">1</div>
            <div class="column">1-40,000</div>
            <div class="column">10</div>
            <div class="column">30%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_paizhao">
      <div class="wrap_paizhao_top animate__animated animate__backInUp">
        <h3>牌照資質</h3>
        <h5>全球多國合法牌照，始終肩負責任博彩使命</h5>
      </div>
      <div class="list-wrap">
        <div class="list-item">
          <img src="@/assets/hatch/license-1.png" alt="" />
          <div>
            <h5>菲律賓</h5>
            <p>PAGCOR博彩執照</p>
          </div>
        </div>
        <div class="list-item">
          <img src="@/assets/hatch/license-2.png" alt="" />
          <div>
            <h5>英國</h5>
            <p>GC監督委員會牌照</p>
          </div>
        </div>
        <div class="list-item">
          <img src="@/assets/hatch/license-3.png" alt="" />
          <div>
            <h5>馬耳他</h5>
            <p>MGA博彩牌照</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_kehu">
      <div class="wrap_kehu_top animate__animated animate__backInUp">
        <h3>客戶之聲</h3>
        <h5>來自合營夥伴的真實反饋</h5>
      </div>
      <div class="con-main-wrap">
        <div class="list-wrap">
          <div class="list-item">
            <img src="@/assets/hatch/client-1.png" alt="" />
            <div class="list-item-con">
              <h5>Jackson</h5>
              <span>合營夥伴4年/月均盈利 500W+</span>
              <p>
                我的團隊主要是做seo渠道，自2020年底來到ACB孵化中心開啟直營模式，得益於產品技術優勢以及金流通道順暢，團隊業績逐月穩增，配套的客服、風控、數據、活動各方面服務來說，奇博體育的確是最專業、最規範的平台。
              </p>
            </div>
          </div>
          <div class="list-item">
            <img src="@/assets/hatch/client-1.png" alt="" />
            <div class="list-item-con">
              <h5>King總</h5>
              <span>合營夥伴3年/月均盈利 800W+</span>
              <p>
                跟集團代理中心合作最大的好處，莫過於能同時推很多強大的平台，這讓我的團隊受益良多，這也是我為什麼最終選擇入駐孵化中心，集團對我的扶持確實給力，解決了我很多後顧之憂，希望很快我能開自己的平台，加油！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="condition-wrap">
      <div class="top-wrap animate__animated animate__backInUp">
        <h3>入駐條件</h3>
      </div>
      <div class="example-wrap">
        <div class="left-wrap">
          <h4>入駐條件</h4>
          <div class="ul-list">
            <div class="list-item">
              <span>01：</span>
              <span>團隊至少穩定在3人以上； </span>
            </div>
            <div class="list-item">
              <span>02：</span>
              <span>團隊代理線月均總業績不低於30萬/月；</span>
            </div>
            <div class="list-item">
              <span>03：</span>
              <span>提供代理後台相應的憑證截圖。 </span>
            </div>
          </div>
          <h4>聯繫我們</h4>
          <div class="contact-list">
            <div class="list-item">
              <span>地點:</span>
              <span>菲律賓BGC</span>
            </div>
            <div class="list-item">
              <span>時間:</span>
              <span>24小時約談，歡迎溝通</span>
            </div>
            <div class="list-item">
              <span>電話:</span>
              <span>+63 9457716002</span>
            </div>
            <div class="list-item">
              <span>Telegram:</span>
              <span>@ACBWINDO</span>
            </div>
          </div>
        </div>
        <div class="right-wrap">
          <img src="@/assets/hatch/map.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SwapRightOutlined } from "@ant-design/icons-vue";
</script>

<style lang="scss" scoped>
.wrap_contianer {
  min-width: $minWidth;
  .wrap_banner {
    background: url("@/assets/hatch/bg.png") no-repeat center;
    background-size: 100% 100%;
    .bg {
      width: $minWidth;
      height: 450px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-items: flex-start;
      padding-top: 60px;
      h3 {
        font-size: 45px;
        font-weight: 600;
        margin: 0;
      }
      h5 {
        font-size: 20px;
        width: 640px;
        color: #1d2129;
        font-weight: 400;
        line-height: 30px;
        margin: 0;
        margin-top: 12px;
      }
    }
  }
  .wrap_main {
    padding: 40px 0 60px 0px;
    .top_wrap {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 35px;
        font-weight: 600;
        color: #333;
      }
    }
    .con_main_wrap {
      width: $minWidth;
      margin: 0 auto;
      .list_wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-items: stretch;
        gap: 20px;
        margin-top: 40px;
        overflow: hidden;
        .list_item {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          background: #eff7ff;
          border-radius: 4px;
          padding: 30px 40px;
          gap: 20px;
          width: 585px;
          box-sizing: border-box;
          transition: all 0.6s;
          .list_item_con {
            width: 385px;
            h5 {
              margin-top: 15px;
              font-size: 20px;
              font-weight: 500;
              color: #333;
              // width: 380px;
              box-sizing: border-box;
            }
            p {
              margin-top: 8px;
              font-size: 16px;
              font-weight: 400;
              color: #4a5871;
              text-align: left;
              line-height: 24px;
            }
            .cusButton {
              margin-top: 20px;
              width: 146px;
              height: 50px;
            }
          }
        }
        .list_item:hover {
          transform: scale(1.03);
        }
      }
    }
  }
  .wrap_cooper {
    padding: 40px 0px 60px 0px;
    background: #f3f8fd;
    .top_wrap {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 38px;
        font-weight: 600;
        color: #333;
      }
      h5 {
        margin-top: 6px;
        font-size: 20px;
        font-weight: 400;
        color: #4a5871;
        line-height: 30px;
      }
    }
    .con_cooper_wrap {
      width: $minWidth;
      margin: 0 auto;
      .list_wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 40px 20px;
        margin-top: 40px;
        .list_item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          border-radius: 4px;
          width: 385px;
          box-sizing: border-box;
          position: relative;
          transition: all 0.6s;
          img {
            width: 100%;
            height: 190px;
          }
          .list_item_con {
            h5 {
              margin-top: 13px;
              font-size: 20px;
              font-weight: 500;
              color: #333;
            }
            p {
              margin-top: 5px;
              font-size: 16px;
              font-weight: 400;
              color: #656f81;
              line-height: 24px;
            }
          }
        }
        .list_item:hover {
          transform: scale(1.05);
          top: 5px;
        }
      }
    }
  }
  .wrap_demo {
    padding: 40px 0px 60px 0px;
    .wrap_demo_top {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 38px;
        font-weight: 600;
        color: #333;
      }
    }
    .con_wrap_demo {
      width: $minWidth;
      margin: 0 auto;
      .list_wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 40px;
        position: relative;
        gap: 104px;
        .list_item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          justify-content: flex-start;
          gap: 13px;
          position: relative;
          padding: 0 20px;
          width: 330px;
          height: 140px;
          background-size: 100% 100%;
          border-radius: 4px;
          border: 1px solid #d9e4f3;
          .cusImg {
            width: 54px;
            height: 54px;
          }
          .list-item-con {
            padding: 45px 15px 15px;
            h5 {
              font-size: 20px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #333333;
            }
            p {
              margin-top: 5px;
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #4a5871;
              line-height: 24px;
            }
          }
        }
        .list_item_1 {
          background-image: url("@/assets/hatch/process-bg-1.png");
        }
        .list_item_2 {
          background-image: url("@/assets/hatch/process-bg-2.png");
        }
        .list_item_3 {
          background-image: url("@/assets/hatch/process-bg-3.png");
        }
        .list_ico {
          position: absolute;
          width: 44px;
          height: 44px;
        }
        .list1 {
          top: 40px;
          left: 360px;
        }
        .list2 {
          top: 40px;
          left: 794px;
        }
        .list_item_active {
          transform: scale(1.2);
          transition: all 0.3s linear;
          z-index: 1;
        }
      }
    }
  }
  .wrap_yongjin {
    padding: 40px 0px 60px 0px;
    .wrap_demo_top {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 38px;
        font-weight: 600;
        color: #333;
      }
      h5 {
        margin-top: 6px;
        font-size: 20px;
        font-weight: 400;
        color: #4a5871;
        line-height: 30px;
      }
    }
    .con_wrap_yongjin {
      width: $minWidth;
      margin: 0 auto;
      margin-top: 40px;
      .header-list {
        width: $minWidth;
        height: 60px;
        background: linear-gradient(207deg, #023efe 0%, #2782fe 100%);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        div {
          flex: 1;
          text-align: center;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
      }
      .list-wrap {
        .list-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          height: 52px;
          .column {
            flex: 1;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            text-align: center;
          }
        }
        .active {
          background: #f5f9fe;
        }
      }
    }
  }
  .wrap_paizhao {
    padding-top: 40px;
    padding-bottom: 100px;
    background: url("@/assets/hatch/license-bg.png") no-repeat center;
    background-size: cover;
    .wrap_paizhao_top {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 38px;
        font-weight: 600;
        color: #333;
      }
      h5 {
        margin-top: 6px;
        font-size: 20px;
        font-weight: 400;
        color: #4a5871;
        line-height: 30px;
      }
    }
    .list-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-top: 30px;
      gap: 40px;
      width: $minWidth;
      .list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 13px;
        position: relative;
        img {
          width: 342px;
          height: 460px;
        }
        div {
          h5 {
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #1d2129;
            line-height: 25px;
            text-align: center;
          }
          p {
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #1d2129;
            line-height: 25px;
            text-align: center;
          }
        }
      }
    }
  }
  .wrap_kehu {
    padding-top: 40px;
    padding-bottom: 100px;
    .wrap_kehu_top {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 38px;
        font-weight: 600;
        color: #333;
      }
      h5 {
        margin-top: 6px;
        font-size: 20px;
        font-weight: 400;
        color: #4a5871;
        line-height: 30px;
      }
    }
    .con-main-wrap {
      width: $minWidth;
      margin: 0 auto;
      .list-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-items: stretch;
        gap: 30px;
        margin-top: 40px;
        .list-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          align-items: flex-start;
          gap: 16px;
          padding: 25px 35px;
          width: 585px;
          background: #eff7ff;
          border-radius: 4px;
          box-sizing: border-box;
          transition: all 0.6s;
          img {
            width: 116px;
            height: 116px;
            border-radius: 58px;
          }
          .list-item-con {
            h5 {
              font-size: 28px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #333333;
            }
            span {
              margin-top: 8px;
              font-size: 18px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #333333;
            }
            p {
              margin-top: 13px;
              font-size: 16px;
              font-weight: 400;
              color: #656f81;
              text-align: left;
              line-height: 28px;
            }
          }
        }
        .list-item:hover {
          transform: scale(1.03);
        }
      }
    }
  }
  .condition-wrap {
    padding-top: 40px;
    padding-bottom: 90px;
    background: #f3f8fd;
    .top-wrap {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 40px;
        font-weight: 600;
        color: #333;
      }
    }
    .example-wrap {
      width: $minWidth;
      min-height: 430px;
      margin: 0 auto;
      margin-top: 40px;
      background: #ffffff;
      box-shadow: 0 6px 23px 0 rgba(24, 57, 127, 0.21), inset 0 4px 0 0 #ffffff;
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .left-wrap {
        width: 630px;
        height: 100%;
        background: linear-gradient(207deg, #023efe 0%, #2782fe 100%);
        border-radius: 8px 0 0 8px;
        padding: 10px 40px 40px;
        box-sizing: border-box;
        h4 {
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          margin-top: 20px;
          height: 37px;
          line-height: 37px;
        }
        .ul-list {
          margin-top: 15px;
          .list-item {
            width: 100%;
            padding: 15px 20px;
            background: rgba(255, 255, 255, 0.26);
            border-radius: 4px;
            border: 1px solid #82a4ff;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            margin-top: 5px;
            span:nth-child(1) {
              font-size: 20px;
              font-family: DINAlternate-Bold, DINAlternate;
              font-weight: bold;
              color: #ffffff;
            }
          }
        }
        .contact-list {
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          height: 57px;
          .list-item {
            width: calc(45% - 5px);
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
          }
        }
      }
      .right-wrap {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #fff;
        img {
          width: 509px;
          height: 360px;
        }
      }
    }
  }
}
</style>
