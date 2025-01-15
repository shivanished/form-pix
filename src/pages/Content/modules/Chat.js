import React from 'react';
import '../../../styles/tailwind.css';
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"

const Chat = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

export default Chat;