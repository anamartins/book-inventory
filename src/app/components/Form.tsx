'use client';
import Input from './Input';
import SubmitButton from './SubmitButton';

import { FormEvent } from 'react';
import {saveBook, Book} from '../utils/bookStorage';

import '../styles/Form.scss'

function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElements:HTMLFormControlsCollection = event.currentTarget.elements;
    const book:Book = {};

    for (let i = 0; i < formElements.length - 1; i++) {
        const input = formElements[i] as HTMLInputElement;
        const name = input.name;
        const value = input.value;
        book[name] = value;
       
        if (formElements[i].type == "checkbox") {
            formElements[i].checked = ""
        } else {
            formElements[i].value = ""   
        }
    }
    saveBook(book);
}

const Form = () => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <Input name="name" label="Name:" />
            <Input name="authorName" label="Author name:" />
            <Input name="authorGender" label="Author gender:" />
            <Input name="authorNationality" label="Author nationality:" />
            <Input name="authorBirthdate" label="Author birthdate:" type="date"/>
            <Input name="publisher" label="Publisher:" />
            <Input name="year" label="Published in:" type="number"/>
            <Input name="edition" label="Edition:" type="number"/>
            <Input name="genre" label="Genre:" />
            <Input name="photo" label="Photo:" />
            <Input name="isSigned" label="Is signed?" type="checkbox"/>
            <Input name="isSignedToMe" label="Is signed to me?" type="checkbox"/>
            <Input name="details" label="Other details" />
            <SubmitButton label="Go!" />
        </form>
    );
};

export default Form;
