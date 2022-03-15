import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15rem auto;
`
const ToHomeLink = styled.a`
    text-decoration: underline;
    color: blue;
`

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 5000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <Container>
            <h1>404</h1>
            <h2>Oooops !..</h2>
            <p>This page doesn't exists.</p>
            <p>You will be redirected to the <Link href='/' passHref><ToHomeLink>homepage</ToHomeLink></Link> in 5sec...</p>
        </Container>
    )
}

export default NotFound