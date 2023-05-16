import { IncommingMessage } from "./IncommingMessage"
import { OutgoingMessage } from "./OutgoingMessage"
import { SendMessage } from "./SendMessage"


export const Messages = () => {

    const msgs = [1, 2, 3, 4, 5]

    return (
        <>
            {/* <!-- Chat inicio --> */}
            <div className="mesgs">

                {/* <!-- Historia inicio --> */}
                <div className="msg_history">

                    {
                        msgs.map(msg => (
                            (msg % 2)
                                ? <IncommingMessage key={msg} />
                                : <OutgoingMessage key={msg} />
                        ))
                    }

                    {/* <IncommingMessage />

                    <OutgoingMessage /> */}

                </div>
                {/* <!-- Historia Fin --> */}

                <SendMessage />

            </div>
            {/* <!-- Chat Fin --> */}
        </>
    )
}
