import React from 'react';

import { Container, Header, Button, ButtonArea, SearchList, PageTransition, Layout } from 'src/components';

class Test extends React.Component {
    constructor(props){
        super(props);
        console.log('Test')

    }
    render(){
        return(
            <PageTransition {...this.props}>
                <Layout
                    Header={(<Header/>)}
                    Content={(<React.Fragment>
                        <h1>Hello Content</h1>
                </React.Fragment>)}
                    Button={(<React.Fragment>
                        <h1>Hello Bottom Button</h1>
                    </React.Fragment>)}
                >
                </Layout>
            </PageTransition>
        )
    }
}
export default Test;
