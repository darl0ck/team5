/* eslint-disable */
import React from 'react';

import TimeWatch from './TimeWatch/TimeWatch.js';
import AddToContactsForm from './AddToContactForm/AddToContactsForm.js';
import ProfileModal from '../ProfileModal/ProfileModal.js';
import Contacts from './Contacts/Contacts.js';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            avatarUrl: props.menu.avatar,
            name: props.menu.name,
            contactList: props.contacts.map(elem => JSON.parse(elem)),
            link: props.menu.link,
            registered: props.menu.registered
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleNewContact = this.handleNewContact.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleNewContact(contact) {
        const newContacts = this.state.contactList.slice();
        newContacts.push(contact);

        this.setState({
            contactList: newContacts
        });
    }

    render() {

        return (
            <div className='menu'>
                <ProfileModal
                    showModal={this.state.showModal}
                    username={this.state.name}
                    handleCloseModal={this.handleCloseModal}
                    avatarUrl={this.state.avatarUrl}
                />

                <div className='back'>
                    <img
                        src={this.state.avatarUrl}
                        onClick={this.handleOpenModal}
                        draggable='false'
                    />
                </div>

                <div className='name'>{this.state.name}</div>

                <TimeWatch/>

                <Contacts
                    contactList={this.state.contactList}
                />

                <AddToContactsForm
                    handleNewContact={this.handleNewContact}
                />

                <style jsx>{`
                    @import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);
                    @import
                    url(https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);

                    .menu
                    {
                        position: fixed;
                        top: 0;
                        left: 0px;
                        right: 0px;
                        width: 100%;
                        height: 50px;
                        background: coral;
                        z-index: 100;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                    }
                    .back
                    {
                        position: absolute;
                        width: 90px;
                        height: 50px;
                        top: 0px;
                        left: 0px;
                        color: #fff;
                        line-height: 50px;
                        font-size: 30px;
                        padding-left: 10px;
                        cursor: pointer;
                    }
                    .back img
                    {
                        position: absolute;
                        top: 5px;
                        left: 30px;
                        width: 40px;
                        height: 40px;
                        background-color: rgba(255,255,255,0.98);
                        border-radius: 100%;
                        -webkit-border-radius: 100%;
                        -moz-border-radius: 100%;
                        -ms-border-radius: 100%;
                        margin-left: 15px;
                    }
                    .back:active
                    {
                        background: rgba(255,255,255,0.2);
                    }
                    .name
                    {
                        position: absolute;
                        top: 3px;
                        left: 110px;
                        font-family: 'Lato';
                        font-size: 25px;
                        font-weight: 300;
                        color: rgba(255,255,255,0.98);
                        cursor: default;
                    }
                    `}</style>
            </div>
        );
    }
}
