document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const cardTemplate = document.querySelector('.card-template');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');

    // 獲取所有篩選器元素
    const nameFilter = document.getElementById('nameFilter');
    // 這些現在將是空的 div，我們將在其中動態添加 checkbox
    const typeFilterDiv = document.getElementById('typeFilter'); 
    const brandFilterDiv = document.getElementById('brandFilter'); 
    const handFeelFilter = document.getElementById('handFeelFilter'); 
    const soundFeelFilter = document.getElementById('soundFeelFilter'); 
    const scenarioFilter = document.getElementById('scenarioFilter'); 
    const classificationFilterDiv = document.getElementById('classificationFilter'); 
    const pinCountFilterDiv = document.getElementById('pinCountFilter'); 
    const ledTypeFilterDiv = document.getElementById('ledTypeFilter'); 
    const upperCoverMaterialFilter = document.getElementById('upperCoverMaterialFilter'); 
    const lowerCoverMaterialFilter = document.getElementById('lowerCoverMaterialFilter'); 
    const crossMaterialFilter = document.getElementById('crossMaterialFilter'); 

    const totalTravelMin = document.getElementById('totalTravelMin');
    const totalTravelMax = document.getElementById('totalTravelMax');
    const actuationForceMin = document.getElementById('actuationForceMin');
    const actuationForceMax = document.getElementById('actuationForceMax');
    const initialPressureMin = document.getElementById('initialPressureMin'); 
    const initialPressureMax = document.getElementById('initialPressureMax'); 
    const bottomOutPressureMin = document.getElementById('bottomOutPressureMin'); 
    const bottomOutPressureMax = document.getElementById('bottomOutPressureMax'); 

    // 軸體資料 (保留您提供的數據)
    const mechanicalSwitches = [
        {
            "name": "MX 紅軸",
            "image": "./img/MX紅軸.png",
            "type": "線性軸",
            "brand": "Cherry",
            "feature": "萬用",
            "totalTravel": 4.0,
            "actuationTravel": 2.0,
            "actuationForce": 45,
            "error": 15,
            "initialPressure": 45,
            "bottomOutPressure": 60,
            "clickLife": "5000萬",
            "dustproofWall": false,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 / 聚碳酸酯",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "線性、無段落感，按壓平滑輕盈",
            "soundFeel": "安靜",
            "scenario": "全能型軸體，遊戲、快速連擊，減少手指疲勞",
            "ledType": "導光柱",
            "pinCount": 3,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "MX 青軸",
            "image": "./img/MX青軸.png",
            "type": "段落軸",
            "brand": "Cherry",
            "feature": "脆響",
            "totalTravel": 4.0,
            "actuationTravel": 2.2,
            "actuationForce": 60,
            "error": 15,
            "initialPressure": 60,
            "bottomOutPressure": 60,
            "clickLife": "5000萬",
            "dustproofWall": false,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 / 聚碳酸酯",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "明顯段落感，清脆點擊聲",
            "soundFeel": "聲音清脆響亮",
            "scenario": "喜歡段落感與聲音者",
            "ledType": "導光柱",
            "pinCount": 3,
            "isLinear": false,
            "isTactile": true,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "MX 茶軸",
            "image": "./img/MX茶軸.png",
            "type": "段落軸",
            "brand": "Cherry",
            "feature": "萬用",
            "totalTravel": 4.0,
            "actuationTravel": 2.0,
            "actuationForce": 55,
            "error": 15,
            "initialPressure": 55,
            "bottomOutPressure": 60,
            "clickLife": "5000萬",
            "dustproofWall": false,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 / 聚碳酸酯",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "輕微段落感，無明顯聲響",
            "soundFeel": "比青軸安靜，無明顯點擊聲",
            "scenario": "全能型軸體，兼顧打字與遊戲",
            "ledType": "導光柱",
            "pinCount": 3,
            "isLinear": false,
            "isTactile": false,
            "isClicky": false,
            "isSilent": true,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "MX 銀軸",
            "image": "./img/MX銀軸.png",
            "type": "線性軸",
            "brand": "Cherry",
            "feature": "快速",
            "totalTravel": 3.4,
            "actuationTravel": 1.2,
            "actuationForce": 45,
            "error": 15,
            "initialPressure": 45,
            "bottomOutPressure": 60,
            "clickLife": "5000萬",
            "dustproofWall": false,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 / 聚碳酸酯",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "線性，觸發快速，適合高速操作",
            "soundFeel": "安靜",
            "scenario": "高速競技遊戲，追求極致反應",
            "ledType": "導光柱",
            "pinCount": 3,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": true,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": true
        },
        {
            "name": "MX 黑軸",
            "image": "./img/MX黑軸.png",
            "type": "線性軸",
            "brand": "Cherry",
            "feature": "重手",
            "totalTravel": 4.0,
            "actuationTravel": 2.0,
            "actuationForce": 60,
            "error": null,
            "initialPressure": 60,
            "bottomOutPressure": 80,
            "clickLife": "5000萬",
            "dustproofWall": false,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 / 聚碳酸酯",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "線性，較重回饋力",
            "soundFeel": "較安靜但比紅軸重",
            "scenario": "偏好重手觸發、兼顧遊戲",
            "ledType": "導光柱",
            "pinCount": 3,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "靜音紅軸",
            "image": "./img/靜音紅軸.png",
            "type": "靜音軸",
            "brand": "Cherry",
            "feature": "安靜",
            "totalTravel": 3.7,
            "actuationTravel": 1.9,
            "actuationForce": 45,
            "error": 15,
            "initialPressure": 45,
            "bottomOutPressure": 60,
            "clickLife": "5000萬",
            "dustproofWall": true,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 / 聚碳酸酯",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "線性，降噪設計，安靜",
            "soundFeel": "靜音設計，按壓聲響低",
            "scenario": "安靜辦公環境，深夜使用者",
            "ledType": "導光柱",
            "pinCount": 3,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": true,
            "isExtremelyQuiet": true,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "焦糖拿鐵軸",
            "image": "./img/焦糖拿鐵軸.png",
            "type": "線性軸",
            "brand": "環諾",
            "feature": "麻將音",
            "totalTravel": 3.6,
            "actuationTravel": 2.0,
            "actuationForce": 45,
            "error": 5,
            "initialPressure": 38,
            "bottomOutPressure": 52,
            "clickLife": "6000萬",
            "dustproofWall": false,
            "upperCoverMaterial": "聚碳酸酯 (PC)",
            "lowerCoverMaterial": "尼龍 (PA)",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "極順滑、觸底紮實，回彈迅速跟手",
            "soundFeel": "麻將音",
            "scenario": "打字、日常使用，以及追求鍵盤聲音表現",
            "ledType": "導光柱",
            "pinCount": 5,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": true,
            "isMahjongSound": true,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "水蜜桃軸 V2",
            "image": "./img/水蜜桃軸 V2.png",
            "type": "靜音軸",
            "brand": "高特",
            "feature": "靜音",
            "totalTravel": 3.3,
            "actuationTravel": 2.0,
            "actuationForce": 40,
            "error": 10,
            "initialPressure": 43,
            "bottomOutPressure": 50,
            "clickLife": "5000萬",
            "dustproofWall": true,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 (PA)",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "靜音順滑，觸底柔和",
            "soundFeel": "極安靜",
            "scenario": "安靜辦公環境，深夜使用者",
            "ledType": "導光柱",
            "pinCount": 5,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": true,
            "isExtremelyQuiet": true,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": true,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "水蜜桃軸 V3",
            "image": "./img/水蜜桃軸 V3.png",
            "type": "靜音軸",
            "brand": "高特",
            "feature": "靜音",
            "totalTravel": 3.3,
            "actuationTravel": 2.0,
            "actuationForce": 40,
            "error": 10,
            "initialPressure": 43,
            "bottomOutPressure": 50,
            "clickLife": "5000萬",
            "dustproofWall": true,
            "upperCoverMaterial": "尼龍 (PA)",
            "lowerCoverMaterial": "尼龍 (PA)",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "靜音順滑，觸底柔和",
            "soundFeel": "極安靜",
            "scenario": "安靜辦公環境，深夜使用者",
            "ledType": "導光柱",
            "pinCount": 5,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": true,
            "isExtremelyQuiet": true,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": true,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "集賢白軸 V3",
            "image": "./img/集賢白軸 V3.png",
            "type": "線性軸",
            "brand": "發狗",
            "feature": "提前觸底",
            "totalTravel": 3.0,
            "actuationTravel": 1.3,
            "actuationForce": 42,
            "error": null,
            "initialPressure": 42,
            "bottomOutPressure": 50,
            "clickLife": null,
            "dustproofWall": true,
            "upperCoverMaterial": "聚碳酸酯 (PC)",
            "lowerCoverMaterial": "尼龍 (PA)",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "滑順、輕盈，提前觸底回饋明顯，軸心穩定度高",
            "soundFeel": "偏安靜清脆",
            "scenario": "高速競技遊戲，追求極致反應",
            "ledType": "導光柱",
            "pinCount": 5,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": true,
            "isExtendedStem": true,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": true
        },
        {
            "name": "JJ軸",
            "image": "./img/JJ軸.png",
            "type": "靜音軸",
            "brand": "Jarvis&JamesDonkey 聯名",
            "feature": "靜音",
            "totalTravel": 4.0,
            "actuationTravel": 2.0,
            "actuationForce": 47,
            "error": 10,
            "initialPressure": 47,
            "bottomOutPressure": 55,
            "clickLife": null,
            "dustproofWall": false,
            "upperCoverMaterial": "聚酮樹酯 (POK)",
            "lowerCoverMaterial": "尼龍 (PA)",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "順滑、靜音",
            "soundFeel": "極安靜",
            "scenario": "安靜辦公環境，深夜使用者",
            "ledType": null,
            "pinCount": 5,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": true,
            "isExtremelyQuiet": true,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": false,
            "isMahjongSound": false,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        },
        {
            "name": "風鈴軸",
            "image": "./img/風鈴軸.png",
            "type": "線性軸",
            "brand": "LODK",
            "feature": "人工厚潤",
            "totalTravel": 3.5,
            "actuationTravel": 1.6,
            "actuationForce": 38,
            "error": 5,
            "initialPressure": null,
            "bottomOutPressure": 43,
            "clickLife": null,
            "dustproofWall": false,
            "upperCoverMaterial": "聚碳酸酯 (PC)",
            "lowerCoverMaterial": "尼龍 (PA)",
            "crossMaterial": "聚縮醛 (POM)",
            "handFeel": "順滑、壓力較輕",
            "soundFeel": "麻將音",
            "scenario": "打字、日常使用，以及追求鍵盤聲音表現",
            "ledType": "導光柱",
            "pinCount": 5,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": false,
            "isExtendedStem": false,
            "isLightPressure": true,
            "isMushy": false,
            "isHIFI": true,
            "isMahjongSound": true,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": true
        },
        {
            "name": "阿尼亞軸 V2",
            "image": "./img/阿尼亞軸 V2.png",
            "type": "線性軸",
            "brand": "PH Studio",
            "feature": "提前觸底",
            "totalTravel": 3.2,
            "actuationTravel": 2.0,
            "actuationForce": 42,
            "error": 5,
            "initialPressure": 42,
            "bottomOutPressure": 50,
            "clickLife": null,
            "dustproofWall": false,
            "upperCoverMaterial": "聚縮醛 (POM)",
            "lowerCoverMaterial": "聚縮醛 (POM)",
            "crossMaterial": "LY 軸心",
            "handFeel": "極滑順，提前觸底回饋明顯，軸心穩定度極高、無雜音",
            "soundFeel": "麻將音",
            "scenario": "打字、日常使用，以及追求極致鍵盤聲音表現",
            "ledType": "導光柱",
            "pinCount": 5,
            "isLinear": true,
            "isTactile": false,
            "isClicky": false,
            "isSilent": false,
            "isExtremelyQuiet": false,
            "isEarlyBottomOut": true,
            "isExtendedStem": true,
            "isLightPressure": false,
            "isMushy": false,
            "isHIFI": true,
            "isMahjongSound": true,
            "isPebbleSound": false,
            "isWaterdropSound": false,
            "isGaming": false
        }
    ];

    // 其他分類的鍵名映射 (HTML value 對應的 JSON 布林值鍵)
    const classificationMap = {
        '防塵壁': 'dustproofWall',
        '極安靜': 'isExtremelyQuiet',
        '提前觸底': 'isEarlyBottomOut',
        '加長軸心': 'isExtendedStem',
        '輕壓力': 'isLightPressure',
        '肉感': 'isMushy',
        'HIFI軸': 'isHIFI',
        '麻將音': 'isMahjongSound',
        '石子音': 'isPebbleSound',
        '水滴音': 'isWaterdropSound',
        '遊戲用途': 'isGaming' 
    };

    // --- 動態生成篩選器選項 ---
    function populateFilters() {
        const uniqueTypes = new Set();
        const uniqueBrands = new Set();
        const uniquePinCounts = new Set();
        const uniqueLedTypes = new Set();
        
        // 遍歷所有軸體數據，收集所有獨特的篩選值
        mechanicalSwitches.forEach(sw => {
            if (sw.type) uniqueTypes.add(sw.type);
            if (sw.brand) uniqueBrands.add(sw.brand);
            if (sw.pinCount !== null && sw.pinCount !== undefined) uniquePinCounts.add(sw.pinCount); // 確保不是 null/undefined
            if (sw.ledType) uniqueLedTypes.add(sw.ledType);
        });

        // 渲染「軸體類型」checkboxes
        renderCheckboxes(typeFilterDiv, Array.from(uniqueTypes).sort());
        // 渲染「廠牌」checkboxes
        renderCheckboxes(brandFilterDiv, Array.from(uniqueBrands).sort());
        // 渲染「腳位」checkboxes，並添加「腳」單位
        renderCheckboxes(pinCountFilterDiv, Array.from(uniquePinCounts).sort((a, b) => a - b), val => `${val} 腳`);
        // 渲染「LED 種類」checkboxes
        renderCheckboxes(ledTypeFilterDiv, Array.from(uniqueLedTypes).sort());
        
        // 渲染「其他分類」checkboxes (直接使用 classificationMap 的鍵作為選項)
        renderCheckboxes(classificationFilterDiv, Object.keys(classificationMap).sort());
    }

    // 輔助函數：渲染 checkbox 到指定的容器
    function renderCheckboxes(containerElement, optionsArray, labelFormatter = val => val) {
        containerElement.innerHTML = ''; // 清空現有內容
        optionsArray.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(labelFormatter(option)));
            containerElement.appendChild(label);
        });
    }

    // 渲染所有卡片
    function renderCards(data) {
        cardContainer.innerHTML = ''; // 清空現有卡片
        if (data.length === 0) {
            cardContainer.innerHTML = '<p class="no-results">找不到符合條件的軸體。</p>';
            return;
        }
        data.forEach(switchData => {
            const card = cardTemplate.cloneNode(true);
            card.classList.remove('card-template');
            card.style.display = 'block';

            // 設置圖片
            card.querySelector('.card-image img').src = switchData.image;
            card.querySelector('.card-image img').alt = switchData.name;

            // 設置 header
            card.querySelector('.card-header h2').textContent = switchData.name;
            card.querySelector('.card-header .type').textContent = switchData.type;

            // 設置 card-body 參數
            const setParam = (selector, value, unit = '') => {
                const paramElem = card.querySelector(`.param.${selector}`);
                if (paramElem) {
                    const dataElem = paramElem.querySelector('.data');
                    const valueElem = paramElem.querySelector('.value');
                    const intervalElem = paramElem.querySelector('.interval');

                    // 檢查值是否有效 (非 undefined, null, 空字串或 'undefined' 字串)
                    if (value !== undefined && value !== null && value !== '' && String(value).toLowerCase() !== 'undefined') { 
                        paramElem.style.display = 'grid'; // 確保顯示
                        if (dataElem) { 
                            dataElem.textContent = value;
                        } else if (valueElem) { 
                            valueElem.textContent = value;
                        }

                        if (unit) {
                            const unitElem = paramElem.querySelector('.unit');
                            if (unitElem) unitElem.textContent = unit;
                        }

                        // 特殊處理誤差欄位
                        if (selector === 'error') {
                            if (switchData.error !== null && switchData.error !== undefined) {
                                if (intervalElem) intervalElem.textContent = '±';
                                if (dataElem) dataElem.textContent = switchData.error;
                            } else {
                                paramElem.style.display = 'none'; // 如果沒有誤差，則隱藏該行
                            }
                        }
                    } else {
                        paramElem.style.display = 'none'; // 如果值不存在，則隱藏該行
                    }
                }
            };
            
            // 設置所有參數
            setParam('brand', switchData.brand);
            setParam('feature', switchData.feature);
            setParam('total-travel', switchData.totalTravel, 'mm');
            setParam('actuation-travel', switchData.actuationTravel, 'mm');
            setParam('actuation-force', switchData.actuationForce, 'cN');
            setParam('error', switchData.error, 'cN'); 
            setParam('initial-pressure', switchData.initialPressure, 'cN');
            setParam('bottom-out-pressure', switchData.bottomOutPressure, 'cN');
            setParam('click-life', switchData.clickLife);
            setParam('upper-cover-material', switchData.upperCoverMaterial);
            setParam('lower-cover-material', switchData.lowerCoverMaterial);
            setParam('cross-material', switchData.crossMaterial);
            setParam('led-type', switchData.ledType);
            setParam('pin-count', switchData.pinCount, '腳');

            // 設置 footer
            card.querySelector('.card-footer .hand-feel').innerHTML = `<span class="highlight">手感特性:</span> ${switchData.handFeel || 'N/A'}`;
            card.querySelector('.card-footer .sound-feel').innerHTML = `<span class="highlight">聲音特性:</span> ${switchData.soundFeel || 'N/A'}`;
            card.querySelector('.card-footer .scenario').innerHTML = `<span class="highlight">適用場景:</span> ${switchData.scenario || 'N/A'}`;

            cardContainer.appendChild(card);
        });
    }

    // 篩選邏輯
    function applyFilters() {
        const filteredSwitches = mechanicalSwitches.filter(sw => {
            // 1. 軸體名稱篩選 (文本)
            const nameSearchTerm = nameFilter.value.trim().toLowerCase();
            const nameMatch = nameSearchTerm === '' || (sw.name && sw.name.toLowerCase().includes(nameSearchTerm));

            // 2. 軸體類型篩選 (多選)
            const selectedTypes = Array.from(typeFilterDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
            const typeMatch = selectedTypes.length === 0 || (sw.type && selectedTypes.includes(sw.type));

            // 3. 廠牌篩選 (多選)
            const selectedBrands = Array.from(brandFilterDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
            const brandMatch = selectedBrands.length === 0 || (sw.brand && selectedBrands.includes(sw.brand));

            // 4. 手感特性篩選 (文本)
            const handFeelSearchTerm = handFeelFilter.value.trim().toLowerCase();
            const handFeelMatch = handFeelSearchTerm === '' || (sw.handFeel && sw.handFeel.toLowerCase().includes(handFeelSearchTerm));

            // 5. 聲音特性篩選 (文本)
            const soundFeelSearchTerm = soundFeelFilter.value.trim().toLowerCase();
            const soundFeelMatch = soundFeelSearchTerm === '' || (sw.soundFeel && sw.soundFeel.toLowerCase().includes(soundFeelSearchTerm));

            // 6. 適用場景篩選 (文本)
            const scenarioSearchTerm = scenarioFilter.value.trim().toLowerCase();
            const scenarioMatch = scenarioSearchTerm === '' || (sw.scenario && sw.scenario.toLowerCase().includes(scenarioSearchTerm));
            
            // 7. 其他分類篩選 (布林值特性多選)
            const selectedClassifications = Array.from(classificationFilterDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
            const classificationMatch = selectedClassifications.every(classification => {
                const propName = classificationMap[classification]; // 從映射中獲取對應的 JSON 屬性名
                return propName && sw[propName] === true; // 確保屬性存在且為 true
            });

            // 8. 腳位篩選 (多選)
            const selectedPinCounts = Array.from(pinCountFilterDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
            const pinCountMatch = selectedPinCounts.length === 0 || (sw.pinCount !== null && sw.pinCount !== undefined && selectedPinCounts.includes(sw.pinCount));

            // 9. LED 種類篩選 (多選)
            const selectedLedTypes = Array.from(ledTypeFilterDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
            const ledTypeMatch = selectedLedTypes.length === 0 || (sw.ledType && selectedLedTypes.includes(sw.ledType));

            // 10. 材質篩選 (文本)
            const upperCoverMaterialSearchTerm = upperCoverMaterialFilter.value.trim().toLowerCase();
            const upperCoverMaterialMatch = upperCoverMaterialSearchTerm === '' || (sw.upperCoverMaterial && sw.upperCoverMaterial.toLowerCase().includes(upperCoverMaterialSearchTerm));

            const lowerCoverMaterialSearchTerm = lowerCoverMaterialFilter.value.trim().toLowerCase();
            const lowerCoverMaterialMatch = lowerCoverMaterialSearchTerm === '' || (sw.lowerCoverMaterial && sw.lowerCoverMaterial.toLowerCase().includes(lowerCoverMaterialSearchTerm));

            const crossMaterialSearchTerm = crossMaterialFilter.value.trim().toLowerCase();
            const crossMaterialMatch = crossMaterialSearchTerm === '' || (sw.crossMaterial && sw.crossMaterial.toLowerCase().includes(crossMaterialSearchTerm));

            // 11. 總行程篩選 (範圍)
            const totalTravelMinVal = parseFloat(totalTravelMin.value);
            const totalTravelMaxVal = parseFloat(totalTravelMax.value);
            const totalTravelMatch = (isNaN(totalTravelMinVal) || (sw.totalTravel !== null && sw.totalTravel !== undefined && sw.totalTravel >= totalTravelMinVal)) &&
                                     (isNaN(totalTravelMaxVal) || (sw.totalTravel !== null && sw.totalTravel !== undefined && sw.totalTravel <= totalTravelMaxVal));

            // 12. 觸發壓力篩選 (範圍)
            const actuationForceMinVal = parseFloat(actuationForceMin.value);
            const actuationForceMaxVal = parseFloat(actuationForceMax.value);
            const actuationForceMatch = (isNaN(actuationForceMinVal) || (sw.actuationForce !== null && sw.actuationForce !== undefined && sw.actuationForce >= actuationForceMinVal)) &&
                                        (isNaN(actuationForceMaxVal) || (sw.actuationForce !== null && sw.actuationForce !== undefined && sw.actuationForce <= actuationForceMaxVal));

            // 13. 初始壓力篩選 (範圍)
            const initialPressureMinVal = parseFloat(initialPressureMin.value);
            const initialPressureMaxVal = parseFloat(initialPressureMax.value);
            const initialPressureMatch = (isNaN(initialPressureMinVal) || (sw.initialPressure !== null && sw.initialPressure !== undefined && sw.initialPressure >= initialPressureMinVal)) &&
                                         (isNaN(initialPressureMaxVal) || (sw.initialPressure !== null && sw.initialPressure !== undefined && sw.initialPressure <= initialPressureMaxVal));

            // 14. 觸底壓力篩選 (範圍)
            const bottomOutPressureMinVal = parseFloat(bottomOutPressureMin.value);
            const bottomOutPressureMaxVal = parseFloat(bottomOutPressureMax.value);
            const bottomOutPressureMatch = (isNaN(bottomOutPressureMinVal) || (sw.bottomOutPressure !== null && sw.bottomOutPressure !== undefined && sw.bottomOutPressure >= bottomOutPressureMinVal)) &&
                                           (isNaN(bottomOutPressureMaxVal) || (sw.bottomOutPressure !== null && sw.bottomOutPressure !== undefined && sw.bottomOutPressure <= bottomOutPressureMaxVal));


            return nameMatch && typeMatch && brandMatch && handFeelMatch && soundFeelMatch && scenarioMatch && 
                   classificationMatch && pinCountMatch && ledTypeMatch && 
                   upperCoverMaterialMatch && lowerCoverMaterialMatch && crossMaterialMatch &&
                   totalTravelMatch && actuationForceMatch && initialPressureMatch && bottomOutPressureMatch;
        });
        renderCards(filteredSwitches);
    }

    // 重設篩選
    function resetFilters() {
        nameFilter.value = '';
        typeFilterDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        brandFilterDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        handFeelFilter.value = '';
        soundFeelFilter.value = '';
        scenarioFilter.value = '';
        classificationFilterDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        pinCountFilterDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        ledTypeFilterDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        upperCoverMaterialFilter.value = '';
        lowerCoverMaterialFilter.value = '';
        crossMaterialFilter.value = '';
        totalTravelMin.value = '';
        totalTravelMax.value = '';
        actuationForceMin.value = '';
        actuationForceMax.value = '';
        initialPressureMin.value = ''; 
        initialPressureMax.value = ''; 
        bottomOutPressureMin.value = ''; 
        bottomOutPressureMax.value = ''; 

        applyFilters(); // 重設後再次套用篩選以顯示所有內容
    }

    // 事件監聽器
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);

    // 初始化：載入時動態生成篩選器並顯示所有卡片
    populateFilters(); 
    renderCards(mechanicalSwitches);
});