const CreateAssetSelectors = {
    Shadow_Card: '//img[@alt="Menu Icon"]/following-sibling::p[text()="2070"]',
    BTN_Plus: '//button[@class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-primarBlue300 text-white rounded-full p-4 shadow-xl flex justify-center items-center"]',
    DRP_SelectType: '//div[@class="relative w-full"]',
    TXT_SerialNumber: '//input[@placeholder="VIN/Serial Number"]',
    TXT_StockNumber: '//input[@placeholder="Stock Number"]',
    TXT_AssetNumber: '//input[@placeholder="Asset Number"]',
    BTN_Create: '//button[text()="Create"]',
  };
  module.exports = CreateAssetSelectors;