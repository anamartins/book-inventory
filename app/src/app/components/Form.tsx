"use client"
import Input from "./Input";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitButton";

import {FormEvent} from 'react'

import saveBook from '../utils/saveBook'

function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElements = event.currentTarget.elements
    const book = {}

    for (let i = 0; i < formElements.length - 1; i++){
        const name = formElements[i].name;
        const value = formElements[i].value;
        book[name] = value
    }
    saveBook(book)
}

const Form = () => {
    return(
        <form className="form" onSubmit={onSubmit}>   
            <Input name={"name"} label={"Name:"}/>
            <Input name={"authorName"} label={"Author name:"} />
            <Input name={"authorGender"} label={"Author gender:"} />
            <Input name={"authorNationality"} label={"Author nationality:"} />
            <Input name={"authorBirthdate"} label={"Author birthdate:"} />
            <Input name={"publisher"} label={"Publisher:"} />
            <Input name={"year"} label={"Published in:"} />
            <Input name={"edition"} label={"Edition:"} />
            <Input name={"genre"} label={"Genre:"} />
            <Input name={"photo"} label={"Photo:"} />
            <Checkbox name={"isSigned"} label={"Is signed?"} />
            <Checkbox name={"isSignedToMe"} label={"Is signed to me?"} />
            <Input name={"details"} label={"Other details"} />
            <SubmitButton label={"Go!"} />
        </form>
    )
 

}

export default Form;