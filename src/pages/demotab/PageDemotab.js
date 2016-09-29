
const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Tab,TabBar } = SaltUI;

class Demotab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabActiveIndex: 0,
            barActiveIndex:0
        };
    }

    render() {
        let t = this;
        return (
            <div className="demotab">
                {
                    t._renderTab()
                }
                {
                    t._renderBar()
                }
            </div>
        );
    }
    handleTabChange(tab) {
        console.log(tab.active);
    }

    handleBarChange(activeIndex){
        this.setState({
            barActiveIndex: activeIndex
        });
    }

    _renderBar(){
        let t = this;
        return (<TabBar activeIndex={this.state.barActiveIndex} onChange={t.handleBarChange.bind(t)}>
                <TabBar.Item title="工作台"></TabBar.Item>
                <TabBar.Item title="CRM"></TabBar.Item>
                <TabBar.Item title="资讯"></TabBar.Item>
                <TabBar.Item title="我的"></TabBar.Item>
            </TabBar>);
    }

    _renderTab(){
        let t = this;
        return (<Tab active={t.state.tabActiveIndex} onChange={t.handleTabChange.bind(t)}>
                    <Tab.Item title="业绩展示">
                         <Tab active={0} type='brick'>
                            <Tab.Item title="上月">
                                <div className="t-LH1_5 t-P10">
                                    这里是上月 单据信息
                                </div>
                            </Tab.Item>
                            <Tab.Item title="本月">
                                <div className="t-LH1_5 t-P10">
                                    这里是本月 单据信息...
                                </div>
                            </Tab.Item>
                        </Tab>
                    </Tab.Item>
                    <Tab.Item title="待办提醒">
                        <div className="t-LH1_5 t-P10">
                            待办提醒...
                        </div>
                    </Tab.Item>
                </Tab>);
    }
}

reactMixin.onClass(Demotab, Reflux.connect(Store, 'Demotab'));

module.exports = Demotab;
