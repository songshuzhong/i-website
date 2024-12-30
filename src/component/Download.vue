<template>
  <el-button @click="onClick">xia zai</el-button>
</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';

export default defineComponent({
  name: 'Download',
  setup() {
    const {proxy} = getCurrentInstance();
    const menus = [
      {
        "renderer": "menuitem",
        "name": "form",
        "title": "表单",
        "icon": "",
        "pageId": "7fe82cb4-4156-4897-a6f1-82cd8e1cc9f5",
        "groupBy": "form",
        "hidden": null,
        "visible": [
          8
        ],
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/spark-md5.min.js",
          "https://songshuzhong.github.io/i-assets/public/js/Schedule.394219.min.js",
          "https://songshuzhong.github.io/i-assets/public/js/Richtxt.fca61a.min.js?version=1.0.1"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/7fe82cb4-4156-4897-a6f1-82cd8e1cc9f5"
      },
      {
        "renderer": "menuitem",
        "name": "formDisabled",
        "title": "表单禁用",
        "icon": "",
        "pageId": "96932910-8814-4428-b4e1-f2a91785da0b",
        "groupBy": "form",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/Schedule.394219.min.js",
          "https://songshuzhong.github.io/i-assets/public/js/Richtxt.fca61a.min.js?version=1.0.1"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/96932910-8814-4428-b4e1-f2a91785da0b"
      },
      {
        "renderer": "menuitem",
        "name": "foldingForm",
        "title": "表单折叠",
        "icon": "",
        "pageId": "9898b4da-37c2-44a6-8fe4-3a13b2d33df6",
        "groupBy": "form",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/Extable.f868ed.min.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/9898b4da-37c2-44a6-8fe4-3a13b2d33df6"
      },
      {
        "renderer": "menuitem",
        "name": "steps",
        "title": "引导",
        "icon": "",
        "pageId": "fc3a856e-46ff-4012-a1e7-70677a98d29c",
        "groupBy": "form",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/fc3a856e-46ff-4012-a1e7-70677a98d29c"
      },
      {
        "renderer": "menuitem",
        "name": "inputValid",
        "title": "校验",
        "icon": "",
        "pageId": "3381e12c-a587-47bb-8874-71055f0f11df",
        "groupBy": "form",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/3381e12c-a587-47bb-8874-71055f0f11df"
      },
      {
        "renderer": "menuitem",
        "name": "comboValid",
        "title": "选项卡表单",
        "icon": "",
        "pageId": "ff661e43-23b4-4f1d-be5e-6e1aa90b44d4",
        "groupBy": "form",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/ff661e43-23b4-4f1d-be5e-6e1aa90b44d4"
      },
      {
        "renderer": "menuitem",
        "name": "comboPerformance",
        "title": "组合性能",
        "icon": "",
        "pageId": "70428cf7-c5b2-472d-b670-d3e9542b2f4d",
        "groupBy": "form",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/70428cf7-c5b2-472d-b670-d3e9542b2f4d"
      },
      {
        "renderer": "menuitem",
        "name": "comboPlus",
        "title": "组合功能",
        "icon": "",
        "pageId": "ffc87f9e-d008-4ee5-99b2-dd0734fea6cb",
        "groupBy": "form",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/ffc87f9e-d008-4ee5-99b2-dd0734fea6cb"
      },
      {
        "renderer": "menuitem",
        "name": "services",
        "title": "服务",
        "icon": "",
        "pageId": "2cfb7da9-b9fc-42e5-b3c6-412b913a2804",
        "groupBy": "",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/2cfb7da9-b9fc-42e5-b3c6-412b913a2804"
      },
      {
        "renderer": "menuitem",
        "name": "list",
        "title": "列表",
        "icon": "",
        "pageId": "b021f6ff-a7e1-448b-ac6b-3da19a06d258",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/b021f6ff-a7e1-448b-ac6b-3da19a06d258"
      },
      {
        "renderer": "menuitem",
        "name": "virtuleList",
        "title": "虚拟列表",
        "icon": "",
        "pageId": "fde6bd44-d592-4f27-b809-f9fd027d84ba",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/fde6bd44-d592-4f27-b809-f9fd027d84ba"
      },
      {
        "renderer": "menuitem",
        "name": "cards",
        "title": "卡片列表",
        "icon": "",
        "pageId": "f2f9da99-dd99-4ee1-b227-e821e61d1939",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/f2f9da99-dd99-4ee1-b227-e821e61d1939"
      },
      {
        "renderer": "menuitem",
        "name": "sheet",
        "title": "表格",
        "icon": "",
        "pageId": "d50ffc69-3e09-41d7-a50e-a0342e16cdd3",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/d50ffc69-3e09-41d7-a50e-a0342e16cdd3"
      },
      {
        "renderer": "menuitem",
        "name": "dataColumn",
        "title": "数据列",
        "icon": "",
        "pageId": "c85640d1-fe0b-46da-ad95-71b9a4e05f6b",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/c85640d1-fe0b-46da-ad95-71b9a4e05f6b"
      },
      {
        "renderer": "menuitem",
        "name": "fixedHeader",
        "title": "浮动表头",
        "icon": "",
        "pageId": "db938182-0ff9-4d25-b11e-3f522481089d",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/db938182-0ff9-4d25-b11e-3f522481089d"
      },
      {
        "renderer": "menuitem",
        "name": "sheetMerge",
        "title": "单元格合并",
        "icon": "",
        "pageId": "2ccde496-7d68-45ec-be1f-735e2b5da59a",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/2ccde496-7d68-45ec-be1f-735e2b5da59a"
      },
      {
        "renderer": "menuitem",
        "name": "tdSelect",
        "title": "单元格选择",
        "icon": "",
        "pageId": "bfbc45cc-4a8d-4f02-ac7d-0cf2d9929a94",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/bfbc45cc-4a8d-4f02-ac7d-0cf2d9929a94"
      },
      {
        "renderer": "menuitem",
        "name": "tasks",
        "title": "单行任务",
        "icon": "",
        "pageId": "030acc1b-5401-4189-86e9-e989fa8b3404",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/030acc1b-5401-4189-86e9-e989fa8b3404"
      },
      {
        "renderer": "menuitem",
        "name": "tasksPlus",
        "title": "多行任务",
        "icon": "",
        "pageId": "fa5efa68-8e4f-4eb6-a633-cff9cda9c407",
        "groupBy": "crud",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/fa5efa68-8e4f-4eb6-a633-cff9cda9c407"
      },
      {
        "renderer": "menuitem",
        "name": "greenQrCode",
        "title": "健康码",
        "icon": "",
        "pageId": "18edafdb-7f3d-41e3-a65d-cdb04090fa72",
        "groupBy": "h5",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/18edafdb-7f3d-41e3-a65d-cdb04090fa72"
      },
      {
        "renderer": "menuitem",
        "name": "activities",
        "title": "活动页",
        "icon": "",
        "pageId": "e6082431-2c79-4c70-82a6-3f8378af90b3",
        "groupBy": "h5",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/Bridge.838e82.min.js?version=1.0.8"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/e6082431-2c79-4c70-82a6-3f8378af90b3"
      },
      {
        "renderer": "menuitem",
        "name": "placard",
        "title": "海报",
        "icon": "",
        "pageId": "c264c4e7-1fa8-43b1-bd38-d87cfd0be4e9",
        "groupBy": "h5",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/c264c4e7-1fa8-43b1-bd38-d87cfd0be4e9"
      },
      {
        "renderer": "menuitem",
        "name": "shoppingcart",
        "title": "商城",
        "icon": "",
        "pageId": "a6c047bb-ced5-4f5b-912b-4984eca059fe",
        "groupBy": "h5",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/a6c047bb-ced5-4f5b-912b-4984eca059fe"
      },
      {
        "renderer": "menuitem",
        "name": "farming",
        "title": "智慧农业",
        "icon": "",
        "pageId": "6adfc32d-a1c8-4c02-9fde-99d79df28a8a",
        "groupBy": "图表",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/lib/wordcloud.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/6adfc32d-a1c8-4c02-9fde-99d79df28a8a"
      },
      {
        "renderer": "menuitem",
        "name": "cityData",
        "title": "城市地图",
        "icon": "",
        "pageId": "fd213a77-7f79-4f88-81ad-39f53612da0a",
        "groupBy": "图表",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://api.map.baidu.com/getscript?ak=R1g6V9BEDdFBoOYlbOHPUXsHUaGjH2HL",
          "https://songshuzhong.github.io/i-assets/public/lib/china.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/fd213a77-7f79-4f88-81ad-39f53612da0a"
      },
      {
        "renderer": "menuitem",
        "name": "clarificationSystem",
        "title": "污水净化",
        "icon": "",
        "pageId": "19f59d90-3203-4250-bf4a-93d35ab16ee9",
        "groupBy": "图表",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/19f59d90-3203-4250-bf4a-93d35ab16ee9"
      },
      {
        "renderer": "menuitem",
        "name": "home",
        "title": "统计",
        "icon": "",
        "pageId": "fb924838-8837-4af5-b62c-8b7d5ee79a87",
        "groupBy": "图表",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/lib/china.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/fb924838-8837-4af5-b62c-8b7d5ee79a87"
      },
      {
        "renderer": "menuitem",
        "name": "scriptError",
        "title": "加载失败",
        "icon": "",
        "pageId": "baaa7a7c-6280-4961-8b3b-aada78e970f7",
        "groupBy": "依赖库",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/test2.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/baaa7a7c-6280-4961-8b3b-aada78e970f7"
      },
      {
        "renderer": "menuitem",
        "name": "testOne",
        "title": "版本冲突1",
        "icon": "",
        "pageId": "8ead0c99-16ff-441f-88e4-5fc5e30fbd58",
        "groupBy": "依赖库",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/Test.6e0a42.min.js?version=v3"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/8ead0c99-16ff-441f-88e4-5fc5e30fbd58"
      },
      {
        "renderer": "menuitem",
        "name": "testTwo",
        "title": "版本冲突2",
        "icon": "",
        "pageId": "897a06c3-84c4-4d7d-950d-f9d23a570672",
        "groupBy": "依赖库",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/Test.1894bf.min.js?version=v4"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/897a06c3-84c4-4d7d-950d-f9d23a570672"
      },
      {
        "renderer": "menuitem",
        "name": "driverjs",
        "title": "引导1",
        "icon": "",
        "pageId": "180de081-02e3-409e-9f80-29548f8d4c02",
        "groupBy": "依赖库",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/Driver.444172.min.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/180de081-02e3-409e-9f80-29548f8d4c02"
      },
      {
        "renderer": "menuitem",
        "name": "linkage",
        "title": "词云",
        "icon": "",
        "pageId": "2b13f116-34ce-4f2f-9741-3bf20a4f231c",
        "groupBy": "依赖库",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/lib/wordcloud.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/2b13f116-34ce-4f2f-9741-3bf20a4f231c"
      },
      {
        "renderer": "menuitem",
        "name": "map",
        "title": "地图",
        "icon": "",
        "pageId": "2b7900e7-2236-4257-a2a6-3cac14b5862f",
        "groupBy": "依赖库",
        "hidden": null,
        "visible": null,
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/lib/china.js",
          "https://songshuzhong.github.io/i-assets/public/lib/hk.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/2b7900e7-2236-4257-a2a6-3cac14b5862f"
      },
      {
        "renderer": "menuitem",
        "name": "animation",
        "title": "内置动画",
        "icon": "",
        "pageId": "419c3641-a47d-44b8-9c97-2c06dbd1d2b3",
        "groupBy": "依赖库",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/419c3641-a47d-44b8-9c97-2c06dbd1d2b3"
      },
      {
        "renderer": "menuitem",
        "name": "tabs",
        "title": "选项卡",
        "icon": "",
        "pageId": "33be59d3-b72c-4325-a275-2a48ab1a5d09",
        "groupBy": "",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/33be59d3-b72c-4325-a275-2a48ab1a5d09"
      },
      {
        "renderer": "menuitem",
        "name": "liveVideo",
        "title": "视频审核",
        "icon": "",
        "pageId": "813d8511-6ee5-4631-bc97-f3354281f13d",
        "groupBy": "",
        "hidden": null,
        "visible": "",
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/813d8511-6ee5-4631-bc97-f3354281f13d"
      },
      {
        "renderer": "menuitem",
        "name": "initData",
        "title": "初始化数据",
        "icon": "",
        "pageId": "8781564d-590a-4484-b20a-40c7eb1ab048",
        "groupBy": "",
        "hidden": null,
        "visible": null,
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/8781564d-590a-4484-b20a-40c7eb1ab048"
      },
      {
        "renderer": "menuitem",
        "name": "uploader",
        "title": "上传",
        "icon": null,
        "pageId": "e5f07294-b1ea-4301-bc4e-5a3c2858a1c9",
        "groupBy": "form",
        "hidden": false,
        "visible": [
          8
        ],
        "assets": [
          "https://songshuzhong.github.io/i-assets/public/js/spark-md5.min.js"
        ],
        "pageDesc": null,
        "schemaUrl": "/api/page/e5f07294-b1ea-4301-bc4e-5a3c2858a1c9"
      },
      {
        "renderer": "menuitem",
        "name": "serviceWorker",
        "title": "辅线程",
        "icon": null,
        "pageId": "c6be5603-a17d-406d-a192-8dd0112a29e0",
        "groupBy": "",
        "hidden": false,
        "visible": [],
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/c6be5603-a17d-406d-a192-8dd0112a29e0"
      },
      {
        "renderer": "menuitem",
        "name": "tableForm",
        "title": "表格表单",
        "icon": null,
        "pageId": "ec18f1cc-408b-472e-a99b-354e736f0623",
        "groupBy": "form",
        "hidden": false,
        "visible": [
          8
        ],
        "assets": [],
        "pageDesc": null,
        "schemaUrl": "/api/page/ec18f1cc-408b-472e-a99b-354e736f0623"
      }
    ];
    let pages;
    const white = () => {
      new Promise(resolve => {
        let page = pages.pop();
        let data = {
          status: 0,
          message: 'success',
          data: page.data
        };
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${data.data.pageId}.json`;
        document.body.appendChild(a);
        const timer = setTimeout(() => {
          a.click();
          URL.revokeObjectURL(url);
          document.body.removeChild(a);
          clearTimeout(timer);
          resolve();
        }, 1000);
      }).then(() => {
        white();
      });
    };
    const onClick = () => {
      Promise.all(menus.map(i => proxy.$api.useApi(proxy.$iRenderConfig, {}).get(i.schemaUrl)))
        .then(res => {
          pages = res;
          white();
        })
        .catch(e => {
          console.error(e);
        });
    };
    return {
      onClick
    };
  }
});
</script>