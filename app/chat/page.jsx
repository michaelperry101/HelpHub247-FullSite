// app/chat/page.jsx  (NO "use client" here)
import ClientShell from '@/components/ClientShell';
import ChatClient from '@/components/ChatClient';

export const metadata = {
  title: 'Chat — HelpHub 247',
  description: 'Chat with Carys on HelpHub 247.',
};

export default function ChatPage() {
  return (
    <ClientShell>
      <ChatClient />
    </ClientShell>
  );
}
