import React from 'react';

function ChatGPTSelect() {

    // 10 个已知数据
    // const data = [
    //   'May your life be filled with love, joy, and adventure!',
    //   'Wishing you a lifetime of love, joy, and happiness!',
    //   'May your future be bright and your dreams come true!',
    //   'Wishing you a journey filled with love, happiness, and success!',
    //   'May your heart be filled with love and your soul with peace!',
    //   'Wishing you a life of abundance, joy, and prosperity!',
    //   'May every day be filled with happiness, love, and laughter!',
    //   'Wishing you a life filled with love, joy, and adventure!',
    //   'May your dreams take you to places you\'ve never been before!',
    //   'Wishing you all the love, joy, and happiness in the world!',
    //   'May your journey be filled with success, happiness, and love!',
    //   'May your life be filled with endless opportunities and possibilities!',
    //   'Wishing you a bright and successful future!',
    //   'May your heart be filled with love, your mind with wisdom, and your life with happiness!',
    //   'Wishing you a life of love, laughter, and adventure!',
    //   'May your journey be filled with love, hope, and inspiration!',
    //   'Wishing you all the best on your journey towards success!',
    //   'May your life be filled with love, joy, and abundance!',
    //   'Wishing you a life of happiness, success, and fulfillment!',
    //   'May your heart be filled with love, and your soul with peace!',
    //   'Wishing you a life filled with love, happiness, and fulfillment!',
    //   'May your dreams take flight and your heart soar with happiness!',
    //   'Wishing you a life of endless possibilities and boundless opportunities!',
    //   'May your journey be filled with love, laughter, and joy!',
    //   'Wishing you a life filled with adventure, excitement, and happiness!',
    //   'May your heart always be open to new experiences and possibilities!',
    //   'Wishing you a life of love, peace, and prosperity!',
    //   'May your journey be filled with love, light, and happiness!',
    //   'Wishing you all the best on your journey towards your dreams and goals!',
    //   '祝福你生日快乐，岁岁平安，年年幸福！',
    //   '愿你的生活充满快乐、成功和美好！',
    //   '祝福你的人生充满爱、和平和幸福！',
    //   '愿你的梦想变成现实，生活充满希望和灵感！',
    //   '祝福你前途光明，梦想成真！',
    //   '愿你的生命充满美好、幸福和自由！',
    //   '祝福你的心灵充满喜悦、和平和安宁！',
    //   '愿你的前途洋溢着成功、爱和快乐！',
    //   '祝福你的人生充满勇气、智慧和力量！',
    //   '愿你的心灵充满温暖、善良和关爱！',
    //   '祝福你的梦想成真，人生充满精彩和无限可能！',
    //   '愿你的生活充满光彩、热情和创意！',
    //   '祝你平安顺遂，一帆风顺！',
    //   '愿你的梦想变成现实，生活充满希望和灵感！',
    //   '祝福你的每一天都充满阳光和温暖！',
    //   '愿你的人生充满欢乐、成功和幸福！',
    //   '祝福你永远拥有勇气、智慧和坚韧不拔的精神！',
    //   '愿你的前途充满着机遇、创新和无限可能！',
    //   '祝你心想事成，万事如意！',
    //   '愿你的心灵充满喜悦、和平和安宁！',
    //   '祝你一帆风顺，前途光明！',
    //   '愿你的人生充满爱、和平和幸福！',
    //   '祝福你健康长寿，家庭幸福美满！',
    //   '愿你的生命充满美好、幸福和自由！',
    //   '祝你有一份喜欢的工作，爱一个人，住一个家！',
    //   '愿你的前途洋溢着成功、爱和快乐！',
    //   '祝福你一切顺利，万事如意！',
    //   '愿你的梦想成真，生活充满光彩和希望！',
    //   '祝你的人生充满勇气、智慧和力量！',
    //   '愿你的前途充满创意、机遇和无限可能！',
    //   '祝你天天开心，事事顺心！',
    //   '愿你的心灵充满温暖、善良和关爱！',
    //   '祝福你平安快乐，健康长寿！',
    //   '愿你的梦想变成现实，生活充满希望和灵感！',
    //   '祝你心想事成，万事如意，前途光明！',
    //   '愿你的人生充满快乐、成功和美好！',
    //   '祝福你永远保持乐观、积极和坚强的心态！',
    //   '愿你的前途洋溢着成功、爱和快乐！',
    //   '祝你事业有成，家庭幸福！',
    //   '愿你的生活充满爱、和平和幸福！',
    //   '祝福你生活充满光彩和创意！'];

    const data = ["abc", "gre", "rgegr", "dgfag", "dfgdfg", "fdga", "dagfg", "EFW", "SFEW", "EFWFEWE", "FEW", "FEWF", "EFW", "EFWF", "FEWEW"]
    //const [ChatGPTdata, setChatGPTData] = useState();

    // 随机选择一个数据
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedData = data[randomIndex];

    //setChatGPTData(selectedData);

    return <div> {selectedData}</div>;

}

export default ChatGPTSelect;
