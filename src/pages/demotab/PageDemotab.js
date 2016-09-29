require('./PageDemotab.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Group, Avatar, Toast, Button,Tab,TabBar } = SaltUI;

class Demotab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    render() {
        let t = this;
        return (
            <div className="demotab">
                {
                    t._renderTab()
                }
            </div>
        );
    }
    handleChange(obj) {
        let t = this;
    }

      _renderTab(){
        return <div>
            <TabBar active={0}>
                <TabBar.item title="上月">
                    <div className="t-LH1_5 t-P10">
                        这里是上月 单据信息
                    </div>
                </TabBar.item>
                <TabBar.item title="本月">
                    <div className="t-LH1_5 t-P10">
                        这里是本月 单据信息...
                    </div>
                </TabBar.item>
            </TabBar>
        </div>
    }

    _renderTab1(){
        return <div>
            <Tab active={0}>
                <Tab.item title="上月">
                    <div className="t-LH1_5 t-P10">
                        这里是上月 单据信息
                    </div>
                </Tab.item>
                <Tab.item title="本月">
                    <div className="t-LH1_5 t-P10">
                        这里是本月 单据信息...
                    </div>
                </Tab.item>
            </Tab>
        </div>
    }

    _renderTab2(){
        let t = this;
        return (<Tab active={t.state.active} onChange={t.handleChange.bind(t)}>
                    <Tab.item title="业绩展示">
                         <Tab active={0}>
                            <Tab.item title="上月">
                                <div className="t-LH1_5 t-P10">
                                    这里是上月 单据信息
                                </div>
                            </Tab.item>
                            <Tab.item title="本月">
                                <div className="t-LH1_5 t-P10">
                                    这里是本月 单据信息...
                                </div>
                            </Tab.item>
                        </Tab>
                    </Tab.item>
                    <Tab.item title="待办提醒">
                        <div className="t-LH1_5 t-P10">
                            待办提醒...
                        </div>
                    </Tab.item>
                </Tab>);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(Demotab, Reflux.connect(Store, 'Demotab'));

module.exports = Demotab;
