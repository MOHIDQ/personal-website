import React from 'react';
import './Header.css'
import Resume from '../Resume/Resume.pdf';
import Button from 'react-bootstrap/Button'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'
import { Space } from 'antd';

class Header extends React.Component {
    render() {
        return (
            <div className='back'>
                <div style={{textAlign: 'center', paddingTop: 10, paddingBottom: 50}}>
                    <h1 className='headerText' style={{color: 'white', textAlign: 'center', fontSize: '6vw', marginBottom: '10px'}}>Mohid Qureshi</h1>
                    <Space>
                        <Button size='lg' target="_blank" href={Resume} variant='outline-light'>Resume</Button>
                        <Button target="_blank" href='https://www.linkedin.com/in/mohid-qureshi-2a711015b/' variant='outline-light'>
                            <FaLinkedinIn size="2.1em"/>
                        </Button>
                        <Button target='_blank' href='https://github.com/MOHIDQ' variant='outline-light'>
                            <FaGithub size="2.1em"/>
                        </Button>
                        <Button target='_blank' href='mailto:mohidq99@gmail.com' variant='outline-light'>
                            <AiOutlineMail size="2.1em"/>
                        </Button>
                    </Space>
                </div>
            </div>

        )
    }
}

export default Header