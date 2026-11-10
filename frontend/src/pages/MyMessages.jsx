import { useEffect, useState } from 'react'
import Feed from '../components/Feed'
import { useMessageStore } from '../store/useMessageStore'


const MyMessages = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {messages, getMessages} = useMessageStore()

    useEffect(() => {
        const load = async () => {
        setError(null)
        setIsLoading(true)
        try {
            getMessages(true)
        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }
        getMessages()
    load()
}, [])

    return <Feed messages={messages} title="Мои сообщения" />
}

export default MyMessages
