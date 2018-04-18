import axios from 'axios';
import React from 'react';

export default class Participants extends React.Component {
    constructor(props) {
        super(props);
        this.state = { participants: [] };
        this.updateParticipants(props.conversationId);
    }

    async updateParticipants(conversationId) {
        const conversation = await axios.get(`api/conversations/${conversationId}`,
            { withCredentials: true, responseType: 'json' })
            .then(res => res.data);

        this.setState({
            participants: conversation.users
        });
    }

    render() {
        return (
            <div className='participants-container'>
                <ol className='participants-list'>
                    {this.state.participants.map((elem, idx) => {
                        return <div key={idx} className="participant">{elem}</div>;
                    })}
                </ol>
                <style jsx>
                    {`
                        .participants-container
                        {
                            clear: left;
                            left: -35px;
                            font: 12px;
                            background: #e6e6dc;
                            width: 160px;
                            margin: 0;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    `}
                </style>
            </div >
        );
    }
}
