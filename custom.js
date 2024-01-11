const targetNode = document.getElementById('root');
const config = {
    attributes: false,
    childList: true,
    subtree: false
};
function custom() {
    if (window.location.hash.indexOf('plan/3') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice1();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/4') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice2();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/8') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice3();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/2') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            // updatePrice4();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/11') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice5();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/9') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            updatePrice6();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/5') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            // updatePrice7();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    } else if (window.location.hash.indexOf('plan/6') != -1) {
        var targetNode1 = document.querySelector('#main-container > div').children[0];
        var observer1 = new MutationObserver(function(mutations) {
            // updatePrice8();
            observer1.disconnect()
        });
        var config1 = { attributes: true, childList: true, subtree: false };
        observer1.observe(targetNode1, config1);
    }
}
// 普通会员
function updatePrice1() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(3) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥360.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 9折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥720.00</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 8折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(5) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">1080.00</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 8折</span>'
}
// 高级会员
function updatePrice2() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(3) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥600.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 9折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥1200.00</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 8.9折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(5) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">1800.00</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 7.5折</span>'
}
// 传家宝
function updatePrice3() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(1) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥320.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 9折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(2) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥610.00</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 9折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(3) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">¥960.00</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 8折</span>'
}
// 入门会员
// function updatePrice4() {
//     const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(3) > div:nth-child(2) > span')
//     let oldPrice = annual.innerHTML
//     annual.innerHTML = '<del style="font-size:.7rem">¥240.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'>9折</span>'
//     const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
//     let oldPrice2 = annual2.innerHTML
//     annual2.innerHTML = '<del style="font-size:.7rem">¥399.00</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'>9折</span>'
// }

// 不限量
function updatePrice5() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(3) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥313.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 8.9折</span>'
    const annual2 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
    let oldPrice2 = annual2.innerHTML
    annual2.innerHTML = '<del style="font-size:.7rem">¥696.00</del> <span class="text-danger">' + oldPrice2 + '</span><span class=\'badge badge-danger\'> 8折</span>'
}
// 学生
function updatePrice6() {
    const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(2) > div:nth-child(2) > span')
    let oldPrice = annual.innerHTML
    annual.innerHTML = '<del style="font-size:.7rem">¥180.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'> 8.5折</span>'
    const annual3 = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(3) > div:nth-child(2) > span')
    let oldPrice3 = annual3.innerHTML
    annual3.innerHTML = '<del style="font-size:.7rem">¥540.00</del> <span class="text-danger">' + oldPrice3 + '</span><span class=\'badge badge-danger\'> 8折</span>'
}
// //钻石
// function updatePrice7() {
//     const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
//     let oldPrice = annual.innerHTML
//     annual.innerHTML = '<del style="font-size:.7rem">¥938.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'>9折</span>'
// }
// 企业
// function updatePrice8() {
//     const annual = document.querySelector('#cashier > div.col-md-8.col-sm-12 > div.block.block-rounded.js-appear-enabled > div.block-content.p-0 > div:nth-child(4) > div:nth-child(2) > span')
//     let oldPrice = annual.innerHTML
//     annual.innerHTML = '<del style="font-size:.7rem">¥1399.00</del> <span class="text-danger">' + oldPrice + '</span><span class=\'badge badge-danger\'>9折</span>'
// }
const observer = new MutationObserver(function(mutations) {
    custom();
});
observer.observe(targetNode, config);
document.addEventListener("DOMContentLoaded", function() {
    custom();
});