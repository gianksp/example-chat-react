import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Conversation } from '../../components/Conversation'

const ConversationPage: NextPage = () => {
  const router = useRouter()
  console.log("Router query");
  console.log(router.query);
  const recipientWalletAddr = router.query.recipientWalletAddr as string
  return <Conversation recipientWalletAddr={recipientWalletAddr} />
}

export default ConversationPage
