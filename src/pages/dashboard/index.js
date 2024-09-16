import React from 'react'
import { Container } from 'react-bootstrap';
import EBreadCrumb from '../../components/Breadcrumb';

export default function Dashboard() {
    return (
        <Container className='mt-3'>
            <EBreadCrumb />
            <h1>Dashboard</h1>
        </Container>

    )
}
