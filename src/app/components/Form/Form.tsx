'use client';
import FormInput from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import SubmitButton from '../SubmitButton/SubmitButton';

import { useState, FormEvent } from 'react';
import { saveBook, Book } from '../../utils/bookStorage';

import './Form.scss';

const Form = () => {
    const [formData, updateFormData] = useState({
        name: '',
        authorName: '',
        authorGender: '',
        authorNationality: '',
        authorBirthdate: '',
        publisher: '',
        year: 0,
        edition: 0,
        genre: '',
        photo: '',
        isSigned: '',
        isSignedToMe: '',
        details: '',
    });

    function onInputChange(name: string, value: string | boolean) {
        updateFormData({
            ...formData,
            [name]: value,
        });
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formElements: HTMLFormControlsCollection =
            event.currentTarget.elements;
        const bookName = formData.name;
        const authorName = formData.authorName;

        if (!bookName || !authorName) {
            console.log(
                'you need to add at least the name of the book and the author'
            ); // to-do: show error on the UI
            return;
        }

        saveBook(formData);

        updateFormData({
            name: '',
            authorName: '',
            authorGender: '',
            authorNationality: '',
            authorBirthdate: '',
            publisher: '',
            year: 0,
            edition: 0,
            genre: '',
            photo: '',
            isSigned: '',
            isSignedToMe: '',
            details: '',
        });

        for (let i = 0; i < formElements.length - 1; i++) {
            const input = formElements[i] as HTMLInputElement;

            if (input.type == 'checkbox') {
                input.checked = false;
            } else {
                input.value = '';
            }
        }
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <FormInput
                name="name"
                label="Name:"
                value={formData.name}
                onChange={onInputChange}
            />
            <FormInput
                name="authorName"
                label="Author name:"
                value={formData.authorName}
                onChange={onInputChange}
            />
            <FormInput
                name="authorGender"
                label="Author gender:"
                value={formData.authorGender}
                onChange={onInputChange}
            />
            <FormInput
                name="authorNationality"
                label="Author nationality:"
                value={formData.authorNationality}
                onChange={onInputChange}
            />
            <FormInput
                name="authorBirthdate"
                label="Author birthdate:"
                type="date"
                value={formData.authorBirthdate}
                onChange={onInputChange}
            />
            <FormInput
                name="publisher"
                label="Publisher:"
                value={formData.publisher}
                onChange={onInputChange}
            />
            <FormInput
                name="year"
                label="Published in:"
                type="number"
                value={formData.year}
                onChange={onInputChange}
            />
            <FormInput
                name="edition"
                label="Edition:"
                type="number"
                value={formData.edition}
                onChange={onInputChange}
            />
            <FormInput
                name="genre"
                label="Genre:"
                value={formData.genre}
                onChange={onInputChange}
            />
            <FormInput
                name="photo"
                label="Photo:"
                value={formData.photo}
                onChange={onInputChange}
            />
            <Checkbox
                name="isSigned"
                label="Is signed?"
                value={formData.isSigned}
                onChange={onInputChange}
            />
            <Checkbox
                name="isSignedToMe"
                label="Is signed to me?"
                value={formData.isSignedToMe}
                onChange={onInputChange}
            />
            <FormInput
                name="details"
                label="Other details"
                value={formData.details}
                onChange={onInputChange}
            />
            <SubmitButton label="Go!" />
        </form>
    );
};

export default Form;
