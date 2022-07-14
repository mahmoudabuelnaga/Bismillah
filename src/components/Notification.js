import React from "react";
import {useState, useEffect} from 'react';
import { notification, Space } from 'antd';

const Notification = () => {
    const [dateState, setDateState] = useState(new Date());
    const [noti, setNoti] = useState(false);
    
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 60000);
    },[]);

    const openNotification = () => {
        if (
            dateState.getMinutes() === 0
            ){
            return (notification.success({
                message: ``,
                description:
                'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير',
            }))
        }else if (
            dateState.getMinutes() === 10
            ){
                return (notification.success({
                message: ``,
                description:
                'لا حول ولا قوة إلا بالله',
            }))
        }else if (
            dateState.getMinutes() === 20
            ){
                return (notification.success({
                message: ``,
                description:
                'اللهم صل وسلم وبارك على سيدنا محمد',
            }))
        }else if (
            dateState.getMinutes() === 30
            ){
                return (notification.success({
                message: ``,
                description:
                'سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر',
            }))
        }else if (
            dateState.getMinutes() === 40
            ){
            return(notification.success({
                message: ``,
                description:
                'سبحان الله ، والحمد لله ، ولا إله إلا الله ، والله أكبر ، اللهم اغفر لي ، اللهم ارحمني ، اللهم ارزقني. ',
            }))    
        }else if (
            dateState.getMinutes() === 50
            ){
                return (notification.success({
                message: ``,
                description:
                'الحمد لله حمدا كثيرا طيبا مباركا فيه',
            }))
        }
        return null

    };

    return(
        <>
            <Space>
                {openNotification()}
            </Space>
        </>
    )
}

export default Notification;