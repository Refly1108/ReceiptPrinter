import React from 'react';

function RandomWishSelector() {
    // 10 个已知数据
    const data = ['新年快乐', '身体健康', '万事如意', '兔年大吉', '开开心心', '龙腾虎跃'];

    // 随机选择一个数据
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedData = data[randomIndex];

    // 返回选中的数据
    return <div>选中的数据是：{selectedData}</div>;
}

export default RandomWishSelector;
