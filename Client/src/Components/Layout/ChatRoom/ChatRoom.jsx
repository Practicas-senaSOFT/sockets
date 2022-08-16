import React from 'react'
import './ChatRoom.scss'
import { AiOutlineSend } from 'react-icons/ai'

export const ChatRoom = () => {
  return (
    <div className="ChatRoom-container">
        <div className="ChatRoom-header">
            <p>Group Name</p>
            <div className="ChatRoom-status">
                <p>Public</p>
                <p>99/100</p>
            </div>
        </div>
        <div className="ChatRoom-body">

        </div>
        <div className="ChatRoom-Footer">
            <input autoFocus={true} name='message' type="text" placeholder="Type a message..." />
            <AiOutlineSend className='send-icon'/>
        </div>
    </div>
  )
}
