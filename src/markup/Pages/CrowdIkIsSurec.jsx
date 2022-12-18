import React, {useState} from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, BsStar } from 'react-icons/all';
import {useStore} from '@/store/store';
import {Button, Tab, Tabs} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

function CrowdIkIsSurec() {
    const [key, setKey] = useState('is-surec');
    return (
        <AuthLayout>
            <h3>React İşi Süreç</h3>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="is-surec" title="İş Süreci">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Anlaşıldı</h3>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<BsStar />}
                        />
                    </VerticalTimeline>
                </Tab>
                <Tab eventKey="cozum-merkezi" title="Çözüm Merkezi">
                    <VerticalTimeline>
                        <Form.Control placeholder={'Yaşadığınız problemi bize yazabilir misiniz?'} type="text"/>
                        <Button style={{float: 'right'}}>Gönder</Button>
                    </VerticalTimeline>
                </Tab>
            </Tabs>
            <Link to={'ik-aday-puanlama'}>
                Adayı Puanla
            </Link>
        </AuthLayout>
    )
}

export default CrowdIkIsSurec;