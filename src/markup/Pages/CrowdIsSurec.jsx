import React, {useState} from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, BsStar } from 'react-icons/all';
import {useStore} from '@/store/store';
import {Button, Tab, Tabs} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CrowdIsSurec() {
    const auth = useStore(state => state.auth);
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
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Freelancer</h3>
                            <h4 className="vertical-timeline-element-subtitle">{auth?.UserName}</h4>
                            <p>
                                Freelancer İşe başladı.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<BsStar />}
                        />
                    </VerticalTimeline>
                </Tab>
                <Tab eventKey="cozum-merkezi" title="Çözüm Merkezi">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Freelancer</h3>
                            <h4 className="vertical-timeline-element-subtitle">{auth?.UserName}</h4>
                            <p>
                                Freelancer İşe başladı.
                            </p>
                        </VerticalTimelineElement>
                        <Form.Control placeholder={'Yaşadığınız problemi bize yazabilir misiniz?'} type="text"/>
                        <Button style={{float: 'right'}}>Gönder</Button>
                    </VerticalTimeline>
                </Tab>
            </Tabs>

        </AuthLayout>
    )
}

export default CrowdIsSurec;