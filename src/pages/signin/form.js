import React from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel';
import EButton from '../../components/Button';
import { Form } from 'react-bootstrap';

export default function Eform({form, handleChange, handleSubmit, isLoading}) {
    return (
    <Form>
        <TextInputWithLabel
            label='Email address'
            name='email'
            value={form.email}
            type='email'
            placeholder='Enter email'
            onChange={handleChange}
        />
        <TextInputWithLabel
            type='password'
            placeholder='Password'
            name='password'
            value={form.password}
            onChange={handleChange}
        />
        <EButton loading={isLoading} disabled={isLoading} variant="success" action={handleSubmit}>Submit</EButton>
    </Form>
    )
}
