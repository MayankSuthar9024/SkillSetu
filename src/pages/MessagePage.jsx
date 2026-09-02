import React, { useState } from 'react';
import { 
  MessageSquare, 
  Search, 
  Send, 
  Paperclip, 
  CheckCheck, 
  ShieldCheck
} from 'lucide-react';

export function MessagePage({ onNavigate, currentUser }) {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Prof. Meenakshi Joshi',
      role: 'HOD Dravyaguna, AIIA New Delhi',
      avatar: 'MJ',
      avatarBg: 'bg-emerald-800',
      online: true,
      unreadCount: 1,
      lastTime: '10:42 AM',
      messages: [
        { id: 101, sender: 'them', text: 'Hello Aarav! I reviewed your Nadi Pariksha research paper notes.', time: '10:30 AM' },
        { id: 102, sender: 'them', text: 'Approved your findings! Great work on the correlation metrics.', time: '10:35 AM' },
        { id: 103, sender: 'me', text: 'Thank you so much Professor! Should I upload the secondary dataset as well?', time: '10:38 AM' },
        { id: 104, sender: 'them', text: 'Yes, please share the secondary dataset by tomorrow evening.', time: '10:42 AM' }
      ]
    },
    {
      id: 2,
      name: 'Dr. Vikram Sethi',
      role: 'R&D Director, Dabur Research Center',
      avatar: 'VS',
      avatarBg: 'bg-teal-800',
      online: true,
      unreadCount: 2,
      lastTime: '9:15 AM',
      messages: [
        { id: 201, sender: 'them', text: 'Hi Aarav, we saw your verified HPLC Phytochemistry Badge score (88%).', time: '9:10 AM' },
        { id: 202, sender: 'them', text: 'Would love to schedule an interview for the Junior Formulations Officer role!', time: '9:15 AM' }
      ]
    },
    {
      id: 3,
      name: 'Priya Nair',
      role: 'BAMS Final Year Scholar, Amrita School of Ayurveda',
      avatar: 'PN',
      avatarBg: 'bg-emerald-700',
      online: false,
      unreadCount: 0,
      lastTime: 'Yesterday',
      messages: [
        { id: 301, sender: 'them', text: 'Hey Aarav! Can you share the Ashwagandha extraction protocol link?', time: 'Yesterday' },
        { id: 302, sender: 'me', text: 'Sure Priya! Here is the CCRAS open-access protocol document link.', time: 'Yesterday' }
      ]
    },
    {
      id: 4,
      name: 'Central Ayush Research Helpdesk',
      role: 'CCRAS Ministry of Ayush',
      avatar: 'CC',
      avatarBg: 'bg-emerald-900',
      online: true,
      unreadCount: 0,
      lastTime: '2 days ago',
      messages: [
        { id: 401, sender: 'them', text: 'Your verified SkillSetu Scholar Dossier has been upgraded to Level 3.', time: '2 days ago' }
      ]
    }
  ]);

  const [activeChatId, setActiveChatId] = useState(1);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const activeChat = conversations.find(c => c.id === activeChatId) || conversations[0];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputText.trim(),
      time: 'Just now'
    };

    setConversations(prev => prev.map(chat => {
      if (chat.id === activeChatId) {
        return {
          ...chat,
          lastTime: 'Just now',
          messages: [...chat.messages, newMsg]
        };
      }
      return chat;
    }));

    setInputText('');

    // Simulate auto-acknowledgement after 1.5s
    setTimeout(() => {
      setConversations(prev => prev.map(chat => {
        if (chat.id === activeChatId) {
          return {
            ...chat,
            lastTime: 'Just now',
            messages: [
              ...chat.messages,
              {
                id: Date.now() + 1,
                sender: 'them',
                text: `Received! Thanks for messaging, Aarav. I will get back to you shortly.`,
                time: 'Just now'
              }
            ]
          };
        }
        return chat;
      }));
    }, 1500);
  };

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden h-[calc(100vh-140px)] min-h-[550px] flex flex-col md:flex-row">
      
      {/* Left Sidebar: Conversations & Contacts List */}
      <div className={`w-full md:w-80 lg:w-96 border-r border-slate-200 bg-slate-50 flex flex-col shrink-0 ${activeChatId ? 'hidden md:flex' : 'flex'}`}>
        
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-200 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-700" />
              Messages & Connections
            </h2>
          </div>

          {/* Search Contacts */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search followers or messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {filteredConversations.map((chat) => {
            const isActive = chat.id === activeChatId;
            const lastMsg = chat.messages[chat.messages.length - 1];

            return (
              <div
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`p-3.5 sm:p-4 transition-all cursor-pointer flex gap-3 items-start ${
                  isActive
                    ? 'bg-emerald-50/80 border-l-4 border-emerald-700'
                    : 'hover:bg-white'
                }`}
              >
                {/* Avatar with Online Badge */}
                <div className="relative shrink-0">
                  <div className={`w-11 h-11 rounded-2xl ${chat.avatarBg} text-white font-extrabold text-xs flex items-center justify-center shadow-xs border-2 border-white`}>
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <h4 className="font-extrabold text-xs text-slate-900 truncate pr-1">
                      {chat.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 shrink-0 font-medium">{chat.lastTime}</span>
                  </div>

                  <p className="text-[11px] text-slate-500 font-medium truncate mb-1">
                    {chat.role}
                  </p>

                  <p className="text-xs text-slate-600 truncate font-normal">
                    {lastMsg ? lastMsg.text : 'No messages yet'}
                  </p>
                </div>

                {chat.unreadCount > 0 && !isActive && (
                  <span className="bg-rose-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Right Main Chat Window Area */}
      <div className={`flex-1 flex flex-col bg-white ${!activeChatId ? 'hidden md:flex' : 'flex'}`}>
        
        {activeChat ? (
          <>
            {/* Active Chat Header */}
            <div className="p-3.5 sm:p-4 border-b border-slate-200 bg-white flex items-center justify-between shrink-0 shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => setActiveChatId(null)}
                  className="md:hidden text-slate-500 hover:text-slate-800 font-bold text-xs p-1"
                >
                  ← Back
                </button>

                <div 
                  onClick={() => onNavigate('profile')}
                  className="flex items-center gap-3 cursor-pointer group min-w-0"
                  title={`View ${activeChat.name}'s Profile`}
                >
                  <div className={`w-10 h-10 rounded-2xl ${activeChat.avatarBg} text-white font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`}>
                    {activeChat.avatar}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-800 group-hover:underline transition-colors truncate">
                        {activeChat.name}
                      </h3>
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-[11px] text-slate-500 truncate font-medium">
                      {activeChat.role} · {activeChat.online ? <span className="text-emerald-600 font-bold">Online</span> : 'Offline'}
                    </p>
                  </div>
                </div>
              </div>


            </div>

            {/* Chat Message History */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3.5 bg-[#f8faf9]">
              <div className="text-center my-2">
                <span className="bg-slate-200/80 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Messages are end-to-end encrypted
                </span>
              </div>

              {activeChat.messages.map((msg) => {
                const isMe = msg.sender === 'me';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-full`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[70%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-2xs ${
                        isMe
                          ? 'bg-emerald-800 text-white rounded-br-none'
                          : 'bg-white border border-slate-200 text-slate-900 rounded-bl-none'
                      }`}
                    >
                      <p className="whitespace-pre-line break-words font-medium">{msg.text}</p>
                    </div>

                    <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-medium px-1">
                      <span>{msg.time}</span>
                      {isMe && <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Message Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 sm:p-4 border-t border-slate-200 bg-white flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => alert('Attachment picker opened. Select clinical PDF case study or image...')}
                className="p-2 rounded-xl text-slate-400 hover:text-emerald-700 hover:bg-slate-100 transition-colors shrink-0"
                title="Attach Case File / Image"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <input
                type="text"
                placeholder={`Message ${activeChat.name}...`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-slate-100 focus:bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                className="bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white p-2.5 rounded-2xl transition-colors shrink-0 shadow-xs cursor-pointer"
                title="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50">
            <MessageSquare className="w-12 h-12 text-slate-300 mb-3" />
            <h3 className="font-extrabold text-slate-800 text-base">Select a conversation to start chatting</h3>
            <p className="text-xs text-slate-500 max-w-xs mt-1">Connect with doctors, preceptors, and fellow scholars on SkillSetu.</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default MessagePage;
