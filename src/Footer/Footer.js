import React from 'react';
import './Footer.css'
import { Space, Tooltip } from 'antd';
import { FaReact, FaJava, FaPython, FaNode, FaHtml5, FaGitAlt } from 'react-icons/fa';
import {    SiPostgresql, SiMongodb, SiJavascript, SiExpress, SiAmazonaws, SiDocker, SiCsharp, 
            SiElasticsearch, SiFirebase } from 'react-icons/si'
class Footer extends React.Component {
    render() {
        return (
            <div className='fback'>
                <div style={{textAlign: 'center', paddingTop: 10, paddingBottom: 50}}>
                    <h1 className='footerText' style={{color: 'white', textAlign: 'center', fontSize: '3.5vw', marginBottom: '20px'}}>Technical Skills</h1>
                    <Space direction='vertical' size={50}>
                        <Space size={30}>
                            <Tooltip title='ReactJS' mouseEnterDelay={0}>
                               <FaReact size="6vw" className='tech' color='#62DAFB'/> 
                            </Tooltip>
                            <Tooltip title='PostgreSQL' mouseEnterDelay={0}>
                                <SiPostgresql size="6vw" className='tech' color='#346790' />
                            </Tooltip>
                            <Tooltip title='Java' mouseEnterDelay={0}>
                               <FaJava size="6vw" className='tech' color='#EA2D2E'/> 
                            </Tooltip>
                            <Tooltip title='Python' mouseEnterDelay={0}>
                              <FaPython size="6vw" className='tech' color='#FFD746'/>  
                            </Tooltip>
                            <Tooltip title='ExpressJS' mouseEnterDelay={0}>
                               <SiExpress size="6vw" className='tech' color='#FFFFFF'/> 
                            </Tooltip>
                            
                        </Space>
                        <Space size={30}>
                            <Tooltip title='NodeJS' mouseEnterDelay={0}>
                               <FaNode size="6vw" className='tech' color='#83CC29'/> 
                            </Tooltip>
                            <Tooltip title='MongoDB' mouseEnterDelay={0}>
                               <SiMongodb size="6vw" className='tech' color='#4FAA40' /> 
                            </Tooltip>
                            <Tooltip title='JavaScript' mouseEnterDelay={0}>
                               <SiJavascript size="6vw" className='tech' color='#F0DB4F'/> 
                            </Tooltip>
                            <Tooltip title='C#' mouseEnterDelay={0}>
                              <SiCsharp size="6vw" className='tech' color='#68217A'/>  
                            </Tooltip>
                            <Tooltip title='Elasticsearch' mouseEnterDelay={0}>
                                <SiElasticsearch size="6vw" className='tech' color='#49AFA7'/>
                            </Tooltip>
                            
                        </Space>
                        <Space size={30}>
                            <Tooltip title='Amazon Web Services (AWS)' mouseEnterDelay={0}>
                               <SiAmazonaws size="6vw" className='tech' color='#F6A80D'/> 
                            </Tooltip>
                            <Tooltip title='Docker' mouseEnterDelay={0}>
                               <SiDocker size="6vw" className='tech' color='#009BC6' /> 
                            </Tooltip>
                            <Tooltip title='HTML' mouseEnterDelay={0}>
                                <FaHtml5 size="6vw" className='tech' color='#E54E26'/>
                            </Tooltip>
                            <Tooltip title='Git' mouseEnterDelay={0}>
                              <FaGitAlt size="6vw" className='tech' color='#F34F28'/>  
                            </Tooltip>
                            <Tooltip title='Firebase' mouseEnterDelay={0}>
                                <SiFirebase size="6vw" className='tech' color='#FFCB2D'/>
                            </Tooltip>
                            
                        </Space>
                    </Space>
                    
                    
                    
                </div>
            </div>
        )
    }
}

export default Footer