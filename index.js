var title = "零点的家";
var user = "零点";
var icp = "";
var pins = [
    {
        txt: "百度",
        url: "https://www.baidu.com",
        svg: `<svg t="1587511002072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5603" width="128" height="128"><path d="M832.512 51.2H191.488A139.849 139.849 0 0 0 51.2 191.488v641.024A139.849 139.849 0 0 0 191.488 972.8h641.024A139.849 139.849 0 0 0 972.8 832.512V191.488A139.849 139.849 0 0 0 832.512 51.2zM538.624 257.024c5.12-44.032 58.368-112.64 100.352-102.4 41.984 9.216 80.896 65.536 72.704 113.664-7.168 48.128-46.08 112.64-105.472 104.448-59.392-7.168-72.704-61.44-67.584-115.712zM413.696 135.168c45.056 0 80.896 51.2 80.896 114.688 0 64.512-35.84 115.712-80.896 115.712S332.8 313.344 332.8 249.856c0-63.488 35.84-114.688 80.896-114.688zM161.792 407.552s9.216-94.208 74.752-100.352c52.224-5.12 90.112 52.224 94.208 84.992 2.048 20.48 13.312 117.76-67.584 135.168s-110.592-75.776-101.376-119.808zM778.24 816.128c-45.056 104.448-206.848 50.176-206.848 50.176S512 846.848 442.368 862.208s-129.024 9.216-129.024 9.216-80.896 2.048-104.448-100.352c-22.528-102.4 80.896-158.72 89.088-167.936 7.168-9.216 61.44-46.08 96.256-104.448s138.24-104.448 211.968 9.216C660.48 585.728 752.64 657.408 752.64 657.408s69.632 54.272 25.6 158.72zM764.928 578.56c-88.064 2.048-92.16-60.416-92.16-104.448 0-47.104 9.216-112.64 80.896-112.64 70.656 0 90.112 69.632 90.112 93.184 0 22.528 9.216 121.856-78.848 123.904z" p-id="5604" fill="#e6e6e6"></path><path d="M429.056 626.688h-56.32s-56.32 5.12-75.776 68.608c-7.168 41.984 6.144 67.584 8.192 72.704s20.48 35.84 65.536 45.056h106.496V559.104l-48.128-1.024v68.608z m-2.048 144.384h-41.984s-29.696-2.048-38.912-35.84c-4.096-14.336 1.024-31.744 3.072-38.912 2.048-7.168 12.288-22.528 32.768-28.672h45.056v103.424zM620.544 768h-50.176s-16.384-2.048-19.456-15.36V631.808l-49.152 1.024v134.144s2.048 32.768 49.152 45.056h121.856v-179.2h-52.224V768z" p-id="5605" fill="#e6e6e6"></path></svg>`
    },
    {
        txt: "服务器",
        url: "https://ldhome.top:520",
        svg: `<svg t="1603967066767" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3865" width="200" height="200"><path d="M35.546399 86.698534v854.341806h409.379641V86.698534z m86.987529 101.274725h237.951352V211.327677H122.533928z m0 88.288008h237.951352v23.37248H122.533928z m118.975676 467.413472l-21.674633-183.078404 21.674633-66.216006 21.674634 66.216006zM306.750251 359.437673h-12.788033v-12.986718h12.788033z m39.014341 9.554901a16.70753 16.70753 0 1 1 16.490783-16.70753 16.617219 16.617219 0 0 1-16.472721 16.635281zM453.487521 827.700069V941.04034h531.299454v-113.340271z m81.460497 92.117192h-49.580724V852.535586h49.580724z m81.460498 0h-49.580724V852.535586h49.580724z m81.460498 0h-49.562662V852.535586h49.580724zM453.487521 703.739227v113.340271h531.299454v-113.340271z m162.920995 92.117193h-49.580724v-67.335862h49.580724z m85.000688 0h-49.562662v-67.335862h49.580724z m77.920308 0H729.712663v-67.335862h49.580724z m85.000687 0h-49.562662v-67.335862h49.580725zM455.167305 582.686399v113.629266h529.61967V582.686399zM782.327836 670.107421h-50.212901v-67.73323h50.212901z m83.284779 0h-50.212901v-67.73323h50.212901z m80.846383 0h-50.212901v-67.73323H946.458998z" fill="#ffffff" p-id="3866"></path></svg>`    }, {
        txt: "路由器",
        url: "http://192.168.31.99",
        svg: `<svg t="1603967187470" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9828" width="200" height="200"><path d="M980.282 834.508l-24.797-223.165c-0.954-41.063-34.651-74.17-75.936-74.17l-39.787 0L839.762 88.666c0-15.98-12.956-28.936-28.936-28.936-15.982 0-28.937 12.956-28.937 28.936l0 448.506L550.403 537.172 550.403 88.666c0-15.98-12.956-28.936-28.936-28.936-15.982 0-28.937 12.956-28.937 28.936l0 448.506L261.043 537.172 261.043 88.666c0-15.98-12.956-28.936-28.936-28.936-15.982 0-28.936 12.956-28.936 28.936l0 448.506L145.3 537.172c-41.322 0-75.04 33.165-75.939 74.272L44.179 852.462c-0.171 1.649-0.17 3.274-0.067 4.876-0.015 0.587-0.088 1.156-0.088 1.747l0 21.702c0 41.882 34.074 75.957 75.957 75.957l788.505 0c41.883 0 75.957-34.075 75.957-75.957l0-21.702C984.442 850.476 982.935 842.23 980.282 834.508zM908.486 898.872 119.98 898.872c-9.973 0-18.085-8.113-18.085-18.085l0-21.702c0-9.971 8.112-18.085 18.085-18.085l788.505 0c9.972 0 18.085 8.114 18.085 18.085l0 21.702 0.001 0C926.571 890.759 918.458 898.872 908.486 898.872z" p-id="9829" fill="#ffffff"></path></svg>`    }, {
        txt: "123",
        url: "",
        purl: "",
        svg: ``    }
];
var apps = [
    {
        txt: "piwigo",
        url: "http://piwigo.ldhome.top:320/",
        purl: "",
        svg: `<svg t="1587648982123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12343" width="128" height="128"><path d="M963.6864 92.544H64.4608a58.4704 58.4704 0 0 0-58.5216 58.5216v726.4a58.4704 58.4704 0 0 0 58.5216 58.5216h899.2256a58.4704 58.4704 0 0 0 58.5216-58.5216v-726.4a58.4704 58.4704 0 0 0-58.5216-58.5216z m-11.6992 435.2a19.4816 19.4816 0 0 1-33.0496 13.7728l-190.72-190.72a30.4768 30.4768 0 0 0-17.92-7.5776 31.8848 31.8848 0 0 0-17.92 6.8864L458.3424 585.536a19.5328 19.5328 0 0 1-27.5456 0l-108.8-109.4784a34.0864 34.0864 0 0 0-15.8336-6.8864 31.9104 31.9104 0 0 0-15.1424 6.1952l-181.76 181.76a19.328 19.328 0 0 1-33.0496-13.7728V189.632a26.4576 26.4576 0 0 1 26.88-26.88h822.1056a26.4576 26.4576 0 0 1 26.88 26.88z" fill="#e6e6e6" p-id="12344"></path><path d="M158.1056 306.048a61.2736 61.2736 0 1 0 61.2736-61.2736 61.2736 61.2736 0 0 0-61.2736 61.2736z" fill="#e6e6e6" p-id="12345"></path></svg>`
    }, {
        txt: "音乐",
        url: "http://mp3.ldhome.top:320",
        purl: "",
        svg: `<svg t="1603964957940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5899" width="200" height="200"><path d="M179.2 1024C81.454545 1024 0 944.872727 0 844.8s79.127273-179.2 179.2-179.2c39.563636 0 76.8 13.963636 109.381818 37.236364l9.309091 6.981818V134.981818c0-34.909091 27.927273-62.836364 60.509091-62.836363l598.109091-69.818182h4.654545C993.745455 0 1024 27.927273 1024 62.836364v672.581818c0 48.872727-18.618182 93.090909-53.527273 125.672727-32.581818 32.581818-79.127273 51.2-125.672727 51.2-97.745455 0-179.2-79.127273-179.2-179.2 0-97.745455 79.127273-179.2 179.2-179.2 39.563636 0 79.127273 13.963636 109.381818 37.236364l9.309091 6.981818V286.254545l-605.090909 65.163637v493.381818c-2.327273 100.072727-81.454545 179.2-179.2 179.2z m0-295.563636c-65.163636 0-118.690909 53.527273-118.690909 118.690909s53.527273 118.690909 118.690909 118.690909 118.690909-53.527273 118.690909-118.690909c-2.327273-67.490909-53.527273-118.690909-118.690909-118.690909z m665.6-111.709091c-65.163636 0-118.690909 53.527273-118.690909 118.690909s53.527273 118.690909 118.690909 118.690909 118.690909-53.527273 118.690909-118.690909-53.527273-118.690909-118.690909-118.690909z m-488.727273-325.818182l605.090909-65.163636V60.509091l-598.109091 69.818182h-6.981818v160.581818z" p-id="5900" fill="#ffffff"></path></svg>`
        }, {
        txt: "照片",
        url: "https://www.ldhome.top:520/photo/",
        purl: "",
        svg: `<svg t="1587648982123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12343" width="128" height="128"><path d="M963.6864 92.544H64.4608a58.4704 58.4704 0 0 0-58.5216 58.5216v726.4a58.4704 58.4704 0 0 0 58.5216 58.5216h899.2256a58.4704 58.4704 0 0 0 58.5216-58.5216v-726.4a58.4704 58.4704 0 0 0-58.5216-58.5216z m-11.6992 435.2a19.4816 19.4816 0 0 1-33.0496 13.7728l-190.72-190.72a30.4768 30.4768 0 0 0-17.92-7.5776 31.8848 31.8848 0 0 0-17.92 6.8864L458.3424 585.536a19.5328 19.5328 0 0 1-27.5456 0l-108.8-109.4784a34.0864 34.0864 0 0 0-15.8336-6.8864 31.9104 31.9104 0 0 0-15.1424 6.1952l-181.76 181.76a19.328 19.328 0 0 1-33.0496-13.7728V189.632a26.4576 26.4576 0 0 1 26.88-26.88h822.1056a26.4576 26.4576 0 0 1 26.88 26.88z" fill="#e6e6e6" p-id="12344"></path><path d="M158.1056 306.048a61.2736 61.2736 0 1 0 61.2736-61.2736 61.2736 61.2736 0 0 0-61.2736 61.2736z" fill="#e6e6e6" p-id="12345"></path></svg>`
    }, {
        txt: "文件管理",
        url: "https://www.ldhome.top:520/kodexplorer/index.php?user/login",
        purl: "",
        svg: `<svg t="1587649004049" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13140" width="128" height="128"><path d="M910.097 360.58v-61.708c0-53-42.03-112.283-98.282-112.283H528.43L516.75 164.54c-11.686-22.352-34.59-36.229-59.807-36.229H154.57c-50.437 0-91.447 42.169-91.447 94.01v575.54c0 51.815 41.01 93.97 91.447 93.97h711.54c50.436 0 91.447-42.155 91.447-93.97V444.615c-0.001-30.634-20.252-63.055-47.461-84.034z m-98.282-117.546c19.541 0 41.838 29.752 41.838 55.838v39.04c-0.956-0.038-1.914-0.096-2.866-0.096H608.553l-50.217-94.782h253.48z m89.297 554.828c0 20.684-15.71 37.524-35.002 37.524H154.57c-19.291 0-35.002-16.84-35.002-37.524v-575.54c0-20.713 15.71-37.566 35.003-37.566h302.37c4.135 0 7.883 2.274 9.868 6.077l99.826 188.42a28.252 28.252 0 0 0 24.942 15.007h259.21c20.23 0 50.326 30.124 50.326 50.354v353.248z" fill="#e6e6e6" p-id="13141"></path></svg>`
    }, /*{
        txt: "百度云",
        url: "",
        purl: "",
        svg: `<svg t="1587649059957" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14912" width="128" height="128"><path d="M483.84 611.84l-7.68 7.68v-7.68h7.68z" fill="#2CA6E0" p-id="14913"></path><path d="M476.16 619.52v-7.68c-7.68-48.64-30.72-94.72-66.56-130.56-35.84-35.84-84.48-58.88-130.56-66.56-30.72-5.12-64-2.56-94.72 5.12 2.56 0 7.68-2.56 10.24-2.56 25.6 0 46.08 20.48 46.08 46.08 0 20.48-12.8 38.4-30.72 43.52 48.64-10.24 99.84 2.56 135.68 38.4 56.32 56.32 58.88 148.48 2.56 207.36l128-133.12z" fill="#E50012" p-id="14914"></path><path d="M1024 627.2c-5.12-53.76-28.16-104.96-69.12-145.92-38.4-38.4-89.6-61.44-140.8-69.12-23.04-2.56-43.52-2.56-66.56 0 2.56-23.04 2.56-43.52 0-66.56-5.12-51.2-28.16-99.84-69.12-140.8l-7.68-7.68-5.12-5.12-5.12-5.12c-2.56 0-2.56-2.56-5.12-2.56-2.56-2.56-5.12-2.56-7.68-5.12 0 0-2.56 0-5.12-2.56 0 0-2.56 0-2.56-2.56-2.56-2.56-5.12-2.56-7.68-5.12L601.6 153.6h-5.12c-2.56 0-2.56-2.56-5.12-2.56s-2.56 0-5.12-2.56h-2.56c-2.56 0-2.56 0-5.12-2.56-79.36-23.04-171.52-2.56-232.96 61.44-56.32 56.32-79.36 133.12-66.56 207.36 48.64 7.68 94.72 30.72 130.56 66.56-40.96-40.96-53.76-102.4-35.84-153.6 0-2.56 2.56-5.12 2.56-7.68 0 0 0-2.56 2.56-2.56 0-2.56 2.56-5.12 2.56-7.68 0 0 0-2.56 2.56-2.56 0-2.56 2.56-5.12 2.56-5.12s0-2.56 2.56-2.56c2.56-2.56 5.12-5.12 5.12-10.24 2.56-5.12 5.12-7.68 10.24-12.8l5.12-5.12c58.88-58.88 151.04-58.88 209.92 0 56.32 56.32 58.88 148.48 2.56 207.36l-2.56 2.56-2.56 2.56c-58.88 56.32-151.04 56.32-207.36-2.56 35.84 35.84 58.88 84.48 66.56 130.56h7.68l-7.68 7.68-130.56 130.56-2.56 2.56-2.56 2.56c-58.88 56.32-151.04 56.32-207.36-2.56-58.88-58.88-58.88-151.04 0-209.92 20.48-17.92 43.52-30.72 66.56-35.84 2.56 0 5.12 0 5.12-2.56 17.92-5.12 30.72-23.04 30.72-43.52 0-25.6-20.48-46.08-46.08-46.08-5.12 0-7.68 0-10.24 2.56-40.96 10.24-79.36 30.72-110.08 64-92.16 92.16-92.16 243.2 0 337.92 38.4 38.4 89.6 61.44 140.8 69.12 69.12 7.68 143.36-15.36 197.12-69.12l140.8-140.8 130.56-130.56-2.56 2.56 2.56-2.56 7.68-7.68-7.68 7.68c58.88-56.32 151.04-56.32 207.36 2.56 25.6 25.6 38.4 56.32 43.52 89.6v2.56c2.56 23.04 23.04 38.4 46.08 38.4 25.6 0 46.08-20.48 46.08-46.08 2.56-5.12 2.56-7.68 2.56-7.68z" fill="#2CA6E0" p-id="14915"></path><path d="M929.28 824.32m-46.08 0a46.08 46.08 0 1 0 92.16 0 46.08 46.08 0 1 0-92.16 0Z" fill="#2CA6E0" p-id="14916"></path></svg>`
    }, {
        txt: "docker",
        url: "",
        purl: "",
        svg: `<svg t="1587649161082" class="icon" viewBox="0 0 1489 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17290" width="128" height="128"><path d="M1465.995636 345.832727c-57.064727-38.818909-123.904-39.656727-168.122181-34.164363-21.876364-92.066909-105.192727-144.197818-109.288728-146.711273l-31.464727-19.269818-22.528 29.323636c-71.121455 92.718545-52.317091 193.629091-22.248727 255.720727a185.250909 185.250909 0 0 1-75.031273 20.48h-25.227636V298.449455h-172.218182V0.186182H632.087273v149.131636H291.374545v149.038546h-170.356363v152.855272H9.588364l-5.213091 35.002182c-1.210182 7.912727-27.927273 195.304727 96.628363 340.433455 91.136 106.123636 236.730182 159.930182 432.779637 159.930182 302.824727 0 488.913455-133.678545 591.592727-245.76a769.675636 769.675636 0 0 0 141.312-218.577455c189.719273-3.258182 215.505455-129.210182 216.529455-134.888727l4.933818-26.437818-22.248728-15.080728zM691.665455 297.797818v-88.715636h88.622545v88.715636H691.665455zM350.952727 446.836364v-88.715637h88.529455V446.836364H350.952727z m170.356364 0v-88.715637h88.529454V446.836364h-88.436363z m170.356364 0v-88.715637h88.622545V446.836364H691.665455z m172.218181-88.715637h88.436364V446.836364h-88.436364v-88.715637zM691.665455 60.043636h88.622545v88.622546H691.665455V60.043636zM521.309091 209.082182h88.529454v88.715636h-88.436363v-88.715636z m-170.356364 0h88.529455v88.715636H350.952727v-88.715636zM180.596364 358.120727h88.436363V446.836364h-88.436363v-88.715637z m353.28 546.257455c-93.090909 0-172.404364-13.125818-237.474909-39.098182 48.221091-10.24 103.237818-29.044364 152.66909-63.953455a41.146182 41.146182 0 0 0-47.19709-67.211636c-80.430545 56.692364-184.32 60.602182-218.298182 60.229818a301.614545 301.614545 0 0 1-19.642182-20.666182C92.439273 690.734545 82.850909 586.752 83.502545 533.410909h953.809455c3.537455 0 89.088-0.744727 156.858182-59.857454l5.026909-4.468364c-7.819636 22.993455-155.927273 435.2-665.320727 435.2z m706.746181-464.802909l-25.413818-1.210182-15.266909-20.386909c-0.558545-0.837818-54.644364-74.565818-21.876363-155.461818 20.945455 21.690182 44.125091 55.389091 42.914909 97.093818l-1.675637 58.274909 55.389091-17.966546c0.651636-0.186182 58.833455-17.966545 112.267637-1.582545-18.897455 20.573091-60.043636 45.428364-146.33891 41.239273zM551.284364 606.580364a67.118545 67.118545 0 0 1 0 134.237091 67.118545 67.118545 0 0 1 0-134.237091z m0 82.292363a15.080727 15.080727 0 1 0 0-30.254545 15.080727 15.080727 0 0 0 0 30.254545z" fill="#e6e6e6" p-id="17291"></path></svg>`
    }, {
        txt: "玩客云",
        url: "",
        purl: "",
        svg: `<svg t="1587649217119" class="icon" viewBox="0 0 1095 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19527" width="128" height="128"><path d="M534.053396 423.290482a42.712254 42.712254 0 1 0-59.687637 9.491612 42.712254 42.712254 0 0 0 59.687637-9.491612zM558.147488 736.513676c71.917214 16.975383 148.762764-48.005653 171.396608-144.929613 0-1.277717 0-2.737965 0.912655-4.015682l-263.574763-46.727936c-17.522976 92.908279 22.086251 179.245441 91.2655 195.673231zM789.414264 429.314005a42.712254 42.712254 0 1 0-27.562181 54.7593 42.894785 42.894785 0 0 0 27.562181-54.7593z" p-id="19528" fill="#e6e6e6"></path><path d="M588.082572 70.458061a314.683442 314.683442 0 0 1 314.31838 313.953318 25.736871 25.736871 0 0 0 0 3.65062v37.601386l30.847739 21.356127a214.656455 214.656455 0 0 1-70.274435 384.957877h-1.277717l-373.458424 100.392049v-61.330415l-58.592451-9.856674-147.485047-25.189278A264.487418 264.487418 0 0 1 247.114665 328.556894l32.307987-11.499453 10.95186-32.307987A313.953318 313.953318 0 0 1 588.082572 70.458061m0-70.456966a384.410284 384.410284 0 0 0-365.061999 261.20186 334.944383 334.944383 0 0 0 45.450219 643.969365L417.96368 930.90919v93.09081l461.255835-123.025893a284.93089 284.93089 0 0 0 93.455872-511.086798v-5.110868A384.592815 384.592815 0 0 0 588.082572 0.001095z" p-id="19529" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "迅雷",
        url: "",
        purl: "",
        svg: `<svg t="1587649252925" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20272" width="128" height="128"><path d="M853.343368 0H170.656632A170.656632 170.656632 0 0 0 0 170.656632v682.656632a170.656632 170.656632 0 0 0 170.656632 170.656633h682.686736a170.656632 170.656632 0 0 0 170.656632-170.656633V170.656632A170.656632 170.656632 0 0 0 853.343368 0z m-8.278457 596.921919l-28.959549-6.713076 13.365946 8.91063-31.187206 13.365946c-2.227658 0-24.504233-6.682973-35.642522-2.227658 0 0 13.335842 4.455315 15.593603 8.91063l-33.38476 13.335842s-6.713076 4.455315-13.365945 4.455315c-4.455315 0-33.414864-6.713076-42.325494-2.227657 0 0 17.821261 8.91063 24.47413 8.91063 0 0-11.138288 15.593603-106.927564 20.048918 0 0 71.285042 198.261524 69.057385 225.023519s-42.325494-31.187206-42.325494-31.187206-60.146754-66.859831-77.968015-80.195673c-17.821261-13.365945-69.057385-22.276576-178.242709-91.33396-109.125118-69.027281-109.125118-158.163688-102.472249-200.459079 6.682973-42.325494 6.682973-73.5127-20.048918-82.42333s-71.285042-20.048918-164.876764-22.276575c0 0-15.593603-11.138288 11.138288-11.138288 26.731891 2.227658 98.016933 2.227658 135.887112-4.425212 42.325494-8.940734 57.919097-22.276576 91.333961-17.851364 33.414864 4.455315 75.770461 15.623706 122.521166 62.374412 0 0 173.817498-189.380997 407.69144-280.714958 0 0 11.138288-4.455315 2.227657 6.682973s-49.008467 73.5127-57.919097 84.650988l-31.187206 28.959548 15.623707-4.455315-31.187206 69.027281-40.097837 40.12794 28.959549-8.940734-33.414864 80.195673-35.672624 35.672625 31.187206-17.821261s-15.593603 33.38476-31.187206 57.919097c0 0 142.570085 15.593603 262.893697 71.285042 0.060207 0.030103-66.799624 17.821261-93.561618 24.534337z" p-id="20273" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "office",
        url: "",
        purl: "",
        svg: `<svg t="1587649309508" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21770" width="128" height="128"><path d="M640 0L64 224v608l192-64V256l384-64v706.816L64 832l576 192 320-96V96z" fill="#e6e6e6" p-id="21771"></path></svg>`
    }, */{
        txt: "Windows",
        url: "http://vnc.ldhome.top:8081/vnc.html",
        purl: "",
        svg: `<svg t="1587649336597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22558" width="128" height="128"><path d="M1.992218 144.862132L418.843891 88.095875l0.1793 402.085355-416.652452 2.370739L1.992218 144.866117z m416.652451 391.642148l0.318755 402.435985L2.314957 881.656031l-0.023906-347.849214 416.349634 2.697463z m50.530615-455.839377L1021.88028 0v485.065214l-552.704996 4.382879V80.668887zM1022.007782 540.289494l-0.131486 482.877759-552.704996-78.007284-0.772981-405.774942L1022.007782 540.289494z" fill="#e6e6e6" p-id="22559"></path></svg>`
    }, /*{
        txt: "智能家居",
        url: "",
        purl: "",
        svg: `<svg t="1587649556372" class="icon" viewBox="0 0 1042 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24365" width="128" height="128"><path d="M111.713373 558.545455h37.236364v409.6a18.618182 18.618182 0 0 0 18.618182 18.618181h707.490909a18.618182 18.618182 0 0 0 18.618181-18.618181V558.545455h37.236364v409.6a55.854545 55.854545 0 0 1-55.854545 55.854545H167.567919a55.854545 55.854545 0 0 1-55.854546-55.854545V558.545455z m-79.834764-24.203637a18.618182 18.618182 0 0 1-26.51229-26.158545l474.707781-481.28a55.854545 55.854545 0 0 1 78.996946-0.539928l478.189382 484.798837a18.618182 18.618182 0 0 1-26.512291 26.139927L533.098682 53.061818a18.674036 18.674036 0 0 0-26.512291 0L31.878609 534.341818zM400.295191 428.218182a27.927273 27.927273 0 1 0 0-55.854546 27.927273 27.927273 0 0 0 0 55.854546z m0 18.618182a46.545455 46.545455 0 1 1 0-93.090909 46.545455 46.545455 0 0 1 0 93.090909z m260.654546 167.563636a27.927273 27.927273 0 1 0 0-55.854545 27.927273 27.927273 0 0 0 0 55.854545z m0 18.618182a46.545455 46.545455 0 1 1 0-93.090909 46.545455 46.545455 0 0 1 0 93.090909z m-204.8 167.563636a27.927273 27.927273 0 1 0 0-55.854545 27.927273 27.927273 0 0 0 0 55.854545z m0 18.618182a46.545455 46.545455 0 1 1 0-93.090909 46.545455 46.545455 0 0 1 0 93.090909z m167.563636 93.090909a27.927273 27.927273 0 1 0 0-55.854545 27.927273 27.927273 0 0 0 0 55.854545z m0 18.618182a46.545455 46.545455 0 1 1 0-93.090909 46.545455 46.545455 0 0 1 0 93.090909z m-180.596364-491.52l11.17091-14.894546 163.84 122.88-11.17091 14.894546-163.84-122.88z m175.141237 184.32L512.004282 729.963055l-13.163054-13.163055 106.253963-106.253964 13.163055 13.163055z m-119.156364 188.769745l10.314473-15.490327 71.344873 47.550836-10.314473 15.490328-71.344873-47.550837z" p-id="24366" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "硬路由",
        url: "",
        purl: "",
        svg: `<svg t="1587649587286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24548" width="128" height="128"><path d="M867.3199 429.235123c-10.604482 0-19.199424-8.596222-19.199424-19.199424 0-113.852584-36.551863-209.968741-105.701789-277.953901-30.858594-30.33893-67.032869-53.913263-107.519334-70.066378-39.274342-15.66929-80.622221-23.615292-122.898073-23.615292-42.268172 0-83.614772 7.946002-122.890393 23.615292-40.486465 16.154395-76.66202 39.727448-107.523174 70.066378-69.160165 67.989-105.715869 164.105157-105.715869 277.953901 0 10.603202-8.596222 19.199424-19.199424 19.199424s-19.199424-8.596222-19.199424-19.199424c0-124.381549 40.524864-229.964301 117.195844-305.3374 34.518004-33.934342 74.962231-60.293871 120.211434-78.34773C418.701039 8.866294 464.835975 0.00128 512 0.00128c47.170425 0 93.306641 8.866294 137.127406 26.350569 45.249203 18.052578 85.692149 44.413388 120.208874 78.34901 76.66074 75.369259 117.181765 180.952011 117.181765 305.33612C886.519324 420.638901 877.921822 429.235123 867.3199 429.235123z" p-id="24549" fill="#e6e6e6"></path><path d="M742.962671 429.235123c-10.601922 0-19.199424-8.596222-19.199424-19.199424 0-70.458046-23.01627-129.853384-66.560563-171.765727-38.136456-36.708019-91.060308-57.762107-145.202684-57.762107-54.134696 0-107.057268 21.054088-145.196284 57.762107-43.548134 41.914903-66.566963 101.310241-66.566963 171.765727 0 10.603202-8.596222 19.199424-19.199424 19.199424s-19.199424-8.596222-19.199424-19.199424c0-81.143166 27.089107-150.104937 78.33877-199.432097 45.224883-43.530214 107.852124-68.494585 171.822045-68.494585 63.977601 0 126.608682 24.964371 171.832285 68.494585 51.243263 49.32332 78.32981 118.286371 78.32981 199.432097C762.162095 420.638901 753.567153 429.235123 742.962671 429.235123z" p-id="24550" fill="#e6e6e6"></path><path d="M1023.98464 1023.970561 0.01536 1023.970561l0-407.98776 1023.969281 0L1023.98464 1023.970561zM38.414208 985.571713l947.171585 0 0-331.190064L38.414208 654.381649 38.414208 985.571713z" p-id="24551" fill="#e6e6e6"></path><path d="M284.826015 900.785776 123.215504 900.785776l0-161.595152 161.610512 0L284.826015 900.785776zM161.614352 862.386928l84.812816 0 0-84.797456-84.812816 0L161.614352 862.386928z" p-id="24552" fill="#e6e6e6"></path><path d="M488.922292 900.785776 327.360419 900.785776l0-161.595152L488.922292 739.190624 488.922292 900.785776zM365.759267 862.386928l84.765457 0 0-84.797456-84.765457 0L365.759267 862.386928z" p-id="24553" fill="#e6e6e6"></path><path d="M512 654.381649c-10.603202 0-19.199424-8.596222-19.199424-19.199424l0-212.742418c0-10.603202 8.596222-19.199424 19.199424-19.199424 10.604482 0 19.199424 8.596222 19.199424 19.199424l0 212.742418C531.199424 645.785426 522.604482 654.381649 512 654.381649z" p-id="24554" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "软路由",
        url: "",
        purl: "",
        svg: `<svg t="1587649632357" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25418" width="128" height="128"><path d="M928 768 928 452.096 544.064 452.096 544.064 256 640 256 640 0 384 0l0 256 96 0 0 196.16-384 0L96 768 0 768l0 256 256 0 0-256L160 768 160 516.096l320 0L480 768 384 768l0 256 256 0 0-256L544.064 768 544.064 516.096 864 516.096 864 768 768 768l0 256 256 0 0-256L928 768zM566.848 950.848 457.152 950.848l0-109.76 109.696 0L566.848 950.848zM182.848 950.784 73.152 950.784l0-109.696 109.696 0L182.848 950.784zM566.848 182.848 457.152 182.848 457.152 73.152l109.696 0L566.848 182.848zM954.496 950.848 844.8 950.848l0-109.76 109.696 0L954.496 950.848z" p-id="25419" fill="#e6e6e6"></path></svg>`
    }, */{
        txt: "showdoc",
        url: "http://showdoc.ldhome.top:320/",
        purl: "",
        svg: `<svg t="1603964875187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4739" width="200" height="200"><path d="M170.666667 85.333333v810.666667h682.666666V469.333333h-85.333333V85.333333H170.666667z m682.666666-85.333333v981.333333H85.333333V0h768zM298.666667 768h42.666666c23.765333 0 42.666667-18.944 42.666667-42.581333v-85.504C384 616.490667 364.8 597.333333 341.333333 597.333333H298.666667v170.666667z m-42.666667 42.666667v-256h85.333333c47.146667 0 85.333333 38.314667 85.333334 85.248v85.504A85.077333 85.077333 0 0 1 341.333333 810.666667H256z m597.333333 0h-85.333333c-47.445333 0-85.333333-38.144-85.333333-85.248v-85.504c0-46.933333 38.186667-85.248 85.333333-85.248h85.333333v42.666666h-42.624c-46.933333 0-85.376 38.186667-85.376 85.333334 0 47.445333 38.229333 85.333333 85.376 85.333333H853.333333v42.666667z m-298.666666-42.666667c23.765333 0 42.666667-18.944 42.666666-42.581333v-85.504c0-23.424-19.2-42.581333-42.666666-42.581334-23.765333 0-42.666667 18.944-42.666667 42.581334v85.504c0 23.424 19.2 42.581333 42.666667 42.581333z m0 42.666667c-47.146667 0-85.333333-38.314667-85.333334-85.248v-85.504c0-47.104 37.888-85.248 85.333334-85.248 47.146667 0 85.333333 38.314667 85.333333 85.248v85.504A85.077333 85.077333 0 0 1 554.666667 810.666667z" fill="#ffffff" p-id="4740"></path></svg> `
        }, /*{
        txt: "冰箱",
        url: "",
        purl: "",
        svg: `<svg t="1587649766000" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29613" width="128" height="128"><path d="M682.666667 512a21.333333 21.333333 0 0 1 21.333333 21.333333v128a21.333333 21.333333 0 0 1-21.333333 21.333334h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333334v-128a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667z m0-298.666667a21.333333 21.333333 0 0 1 21.333333 21.333334v128a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-128a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667z m133.077333-170.666666C836.501333 42.666667 853.333333 56.704 853.333333 74.026667v790.613333c0 17.322667-16.832 31.36-37.589333 31.36H768v64a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-64H341.333333v64a21.333333 21.333333 0 0 1-21.333333 21.333333h-42.666667a21.333333 21.333333 0 0 1-21.333333-21.333333v-64H208.256C187.498667 896 170.666667 881.962667 170.666667 864.64V74.026667C170.666667 56.725333 187.498667 42.666667 208.256 42.666667h607.488zM256 128v682.666667h512V128H256z m0 277.333333h512v85.333334H256v-85.333334z" p-id="29614" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "洗衣机",
        url: "",
        purl: "",
        svg: `<svg t="1587649813504" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30596" width="128" height="128"><path d="M320 102.4h-128c-7.68 0-12.8 5.12-12.8 12.8s5.12 12.8 12.8 12.8h128c7.68 0 12.8-5.12 12.8-12.8s-5.12-12.8-12.8-12.8zM896 0H128C84.48 0 51.2 33.28 51.2 76.8v870.4c0 43.52 33.28 76.8 76.8 76.8h768c43.52 0 76.8-33.28 76.8-76.8V76.8c0-43.52-33.28-76.8-76.8-76.8z m25.6 896c0 43.52-33.28 76.8-76.8 76.8H179.2c-43.52 0-76.8-33.28-76.8-76.8V230.4h819.2v665.6z m0-716.8H102.4V128c0-43.52 33.28-76.8 76.8-76.8h665.6c43.52 0 76.8 33.28 76.8 76.8v51.2zM512 896c168.96 0 307.2-138.24 307.2-307.2s-138.24-307.2-307.2-307.2S204.8 419.84 204.8 588.8s138.24 307.2 307.2 307.2z m0-563.2c133.12 0 243.2 102.4 256 230.4-5.12 5.12-56.32 51.2-125.44 51.2-38.4 0-84.48-51.2-130.56-51.2-43.52 0-87.04-51.2-125.44-51.2-69.12 0-120.32 43.52-128 51.2 12.8-130.56 120.32-230.4 253.44-230.4z m-128 230.4c38.4 0 84.48 51.2 128 51.2 46.08 0 89.6 51.2 130.56 51.2 66.56 0 117.76-43.52 125.44-48.64-12.8 128-122.88 227.84-253.44 227.84-133.12 0-243.2-102.4-256-230.4 5.12-7.68 56.32-51.2 125.44-51.2z" p-id="30597" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "电饭煲",
        url: "",
        purl: "",
        svg: `<svg t="1587649833416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31713" width="128" height="128"><path d="M915.7 112.6C822.4 43.3 671.7 1.3 512.4 1.3S202.3 42.6 109 112.6c-64 48-98 105.3-98 166.7V428c0 14 9.3 25.3 22 29.3V822c0 2 0 3.3 0.7 5.3 3.3 38 34 92 108.7 129.3 11.3 39.3 47.3 66.7 89.3 66.7H255c24 0 46.7-9.3 64-25.3l384 0.7c17.3 16 39.3 25.3 63.3 25.3H789c40.7 0 75.3-25.3 88-62.7 79.3-36.7 112.7-91.3 117.3-132.7 0.7-2 0.7-4.7 0.7-6.7V456c10.7-4.7 18-15.3 18-28V279.3c0.7-61.3-33.3-118.7-97.3-166.7z m36.7 288c-10.7 4.7-18 15.3-18 28v392.7c-0.7 14.7-19.3 59.3-94.7 89.3-10 4-17.3 13.3-18.7 24-2 16-15.3 28-32 28h-22.7c-10 0-19.3-4.7-25.3-12.7-6-7.3-14.7-12-24.7-12l-411.3-0.6c-10 0-18.7 4.7-24.7 12.7-6 8.7-15.3 13.3-26 13.3h-22.7c-16.7 0-30.7-12.7-32-29.3-1.3-11.3-8-20.7-18-25.3-69.3-30-86.6-72.7-87.3-84.7V428c0-14-9.3-25.3-22-29.3V326h879.4l0.7 74.6z m0-108.6H73v-6c0-52 40-99.3 73.3-124 83.3-62 220-99.3 366.7-99.3 146 0 283.4 37.3 366 99.3 33.3 24.7 73.3 72.7 73.3 124v6z" fill="#e6e6e6" p-id="31714"></path><path d="M732.4 179.3c-41.3-44-131.3-92-228.7-92s-186.7 48-228.7 92c-6 6-7.3 14.7-4 22 3.3 8 10.7 12.7 18.7 12.7h428c8 0 15.3-5.3 18.7-12.7 3.3-7.4 1.3-16-4-22z m-424 2.6c48.7-36.7 118.7-70.7 195.3-70.7s146.7 34 195.3 70.7H308.4zM551.7 653.3c0 19.3-16 34-34 34-19.3 0-34-15.3-34-34 0-19.3 15.3-34 34-34 18.7-0.7 34 14.7 34 34zM658.4 624c0 19.3-16 34-34 34-18.7 0-34-15.3-34-34 0-19.3 16-34 34-34s34 15.3 34 34zM443 624c0 19.3-16 34-34 34-19.3 0-34-15.3-34-34 0-19.3 16-34 34-34 18.7 0 34 15.3 34 34z" fill="#e6e6e6" p-id="31715"></path><path d="M744.4 390H279.7c-10.7 0-20 8.7-20 20v138c0 134.7 94 214.7 251.3 214.7s251.3-80 251.3-214.7V409.3c1.4-10.7-7.3-19.3-17.9-19.3z m-360.7 46c0-5.3 4.7-10 10-10H639c5.3 0 10 4.7 10 10v80c0 5.3-4.7 10-10 10H393.7c-5.3 0-10-4.7-10-10v-80zM733 546c0 118-78 182.7-220.7 182.7S291 664 291 546.6v-124h68V530c0 11.3 9.3 20.7 20.7 20.7h270.7c11.3 0 20.7-9.3 20.7-20.7V422.6h62L733 546z" fill="#e6e6e6" p-id="31716"></path></svg>`
    }, {
        txt: "台灯",
        url: "",
        purl: "",
        svg: `<svg t="1587649854651" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32685" width="128" height="128"><path d="M844.885333 554.666667L776.32 177.706667c-0.533333-2.858667-5.525333-7.04-8.490667-7.04H277.482667c-3.029333 0-7.957333 4.096-8.490667 7.04L200.448 554.666667h644.437333zM227.029333 170.069333C231.232 146.816 253.824 128 277.482667 128h490.368c23.637333 0 46.272 18.986667 50.453333 42.069333l70.058667 385.194667c4.202667 23.253333-11.562667 42.069333-35.2 42.069333H192.170667c-23.637333 0-39.36-18.986667-35.178667-42.069333l70.058667-385.194667z" fill="#e6e6e6" p-id="32686"></path><path d="M490.666667 576l42.666666 0 0 341.333333-42.666666 0 0-341.333333Z" fill="#e6e6e6" p-id="32687"></path><path d="M661.333333 618.666667h42.666667v128h-42.666667zM256 896h512v42.666667H256z" fill="#e6e6e6" p-id="32688"></path></svg>`
    }, {
        txt: "摄像头",
        url: "",
        purl: "",
        svg: `<svg t="1587649871509" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33516" width="128" height="128"><path d="M712.608 860.16a489.696 489.696 0 0 1-215.424 50.048c-75.008 0-145.92-17.28-209.6-47.232L238.08 914.56C198.624 955.648 227.744 1024 284.736 1024h440c56 0 83.968-67.744 44.48-107.264l-56.64-56.576zM497.184 227.552a189.856 189.856 0 0 1 189.632 189.632 189.856 189.856 0 0 1-189.632 189.632 189.856 189.856 0 0 1-189.632-189.632 189.856 189.856 0 0 1 189.632-189.632z m0-227.552C266.816 0 80 186.752 80 417.184c0 230.432 186.816 417.184 417.184 417.184 230.432 0 417.184-186.752 417.184-417.184C914.368 186.752 727.616 0 497.184 0z" p-id="33517" fill="#e6e6e6"></path></svg>`
    }*/
];