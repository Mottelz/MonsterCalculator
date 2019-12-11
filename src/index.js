import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// The input fields used to get the old values
class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.handleValUpdate = this.handleValUpdate.bind(this);
    }

    handleValUpdate(e) {
        this.props.handleUpdate(e.target.value, this.props.name)
    }


    render() {
        return(
        <>
            <label>{this.props.name} </label>
            <input
                defaultValue='0'
                min='0'
                type='number'
                name={this.props.name}
                onChange={this.handleValUpdate}
            />
        </>);
    }
}

// The output fields used to display the new values
class OutputField extends React.Component {
    render() {
        return(
            <>
                <input readOnly value={this.props.value}/>
            </>
        );
    }
}

// The CR fields used to set CR
class CRField extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e.target.value, this.props.side);
    }

    render() {
        return(
            <select onChange={this.handleChange}>
                <option value='0'>0</option>
                <option value='1'>0.125</option>
                <option value='2'>0.25</option>
                <option value='3'>0.5</option>
                <option value='4'>1</option>
                <option value='5'>2</option>
                <option value='6'>3</option>
                <option value='7'>4</option>
                <option value='8'>5</option>
                <option value='9'>6</option>
                <option value='10'>7</option>
                <option value='11'>8</option>
                <option value='12'>9</option>
                <option value='13'>10</option>
                <option value='14'>11</option>
                <option value='15'>12</option>
                <option value='16'>13</option>
                <option value='17'>14</option>
                <option value='18'>15</option>
                <option value='19'>16</option>
                <option value='20'>17</option>
                <option value='21'>18</option>
                <option value='22'>19</option>
                <option value='23'>20</option>
                <option value='24'>21</option>
                <option value='25'>22</option>
                <option value='26'>23</option>
                <option value='27'>24</option>
                <option value='28'>25</option>
                <option value='29'>26</option>
                <option value='30'>27</option>
                <option value='31'>28</option>
                <option value='32'>29</option>
                <option value='33'>30</option>
            </select>
        );
    }
}

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inStats: {
                'PB': 0,
                'AC': 0,
                'HP': 0,
                'AB': 0,
                'DR': 0,
                'DC': 0,
                'CR': 0
            },
            outStats: {
                'PB': 0,
                'AC': 0,
                'HP': 0,
                'AB': 0,
                'DR': 0,
                'DC': 0,
                'CR': 0
            }
        };
        this.handleValUpdate = this.handleValUpdate.bind(this);
        this.handleCRUpdate = this.handleCRUpdate.bind(this);
        this.doTheMath = this.doTheMath.bind(this);
    }

    handleValUpdate = async (val, key) => {
        const oldState = this.state;

        const PB = key === 'PB' ?  parseFloat(val) : oldState.inStats.PB;
        const AC = key === 'AC' ?  parseFloat(val) : oldState.inStats.AC;
        const HP = key === 'HP' ?  parseFloat(val) : oldState.inStats.HP;
        const AB = key === 'AB' ?  parseFloat(val) : oldState.inStats.AB;
        const DR = key === 'DR' ?  parseFloat(val) : oldState.inStats.DR;
        const DC = key === 'DC' ?  parseFloat(val) : oldState.inStats.DC;
        const inCR = oldState.inStats.CR;
        const outCR = oldState.outStats.CR;
        await this.setState({ inStats: {
            'PB': PB,
            'AC': AC,
            'HP': HP,
            'AB': AB,
            'DR': DR,
            'DC': DC,
            'CR': inCR
        },
        outStats: {
            'PB': PB,
            'AC': AC,
            'HP': HP,
            'AB': AB,
            'DR': DR,
            'DC': DC,
            'CR': outCR
        }});
        this.doTheMath()
    };

    handleCRUpdate = async(val, side) => {
        const oldState = this.state;
        const inCR = side === 'in' ? parseInt(val) : oldState.inStats.CR;
        const outCR = side === 'out' ? parseInt(val) : oldState.outStats.CR;

        await this.setState((props, state) => { return {
            inStats : {
                'PB': oldState.inStats.PB,
                'AC': oldState.inStats.AC,
                'HP': oldState.inStats.HP,
                'AB': oldState.inStats.AB,
                'DR': oldState.inStats.DR,
                'DC': oldState.inStats.DC,
                'CR': inCR
            },
            outStats: {
                'PB': oldState.outStats.PB,
                'AC': oldState.outStats.AC,
                'HP': oldState.outStats.HP,
                'AB': oldState.outStats.AB,
                'DR': oldState.outStats.DR,
                'DC': oldState.outStats.DC,
                'CR': outCR
            }
            }
        });

        this.doTheMath();
    };

    doTheMath = async () => {
        const oldState = this.state;
        let newState = {
            inStats: {
                'PB': oldState.inStats.PB,
                'AC': oldState.inStats.AC,
                'HP': oldState.inStats.HP,
                'AB': oldState.inStats.AB,
                'DR': oldState.inStats.DR,
                'DC': oldState.inStats.DC,
                'CR': oldState.inStats.CR
            },
            outStats: {
                'PB': monsterMath(parseFloat(oldState.inStats.PB), crChart[oldState.inStats.CR].PB, crChart[oldState.outStats.CR].PB),
                'AC': monsterMath(parseFloat(oldState.inStats.AC), crChart[oldState.inStats.CR].AC, crChart[oldState.outStats.CR].AC),
                'HP': monsterMath(parseFloat(oldState.inStats.HP), crChart[oldState.inStats.CR].HP, crChart[oldState.outStats.CR].HP),
                'AB': monsterMath(parseFloat(oldState.inStats.AB), crChart[oldState.inStats.CR].AB, crChart[oldState.outStats.CR].AB),
                'DR': monsterMath(parseFloat(oldState.inStats.DR), crChart[oldState.inStats.CR].DR, crChart[oldState.outStats.CR].DR),
                'DC': monsterMath(parseFloat(oldState.inStats.DC), crChart[oldState.inStats.CR].DC, crChart[oldState.outStats.CR].DC),
                'CR': oldState.outStats.CR
            }
        };
        await this.setState((props, state) => newState);
    };

    render() {
        return(
            <>
                <label>CR </label>
                <CRField side='in' handleChange={this.handleCRUpdate}/> <CRField side='out' handleChange={this.handleCRUpdate}/> <br/>
                <InputField name='PB' handleUpdate={this.handleValUpdate}/> <OutputField value={this.state.outStats.PB}/> <br/>
                <InputField name='AC' handleUpdate={this.handleValUpdate}/> <OutputField value={this.state.outStats.AC}/> <br/>
                <InputField name='HP' handleUpdate={this.handleValUpdate}/> <OutputField value={this.state.outStats.HP}/> <br/>
                <InputField name='AB' handleUpdate={this.handleValUpdate}/> <OutputField value={this.state.outStats.AB}/> <br/>
                <InputField name='DR' handleUpdate={this.handleValUpdate}/> <OutputField value={this.state.outStats.DR}/> <br/>
                <InputField name='DC' handleUpdate={this.handleValUpdate}/> <OutputField value={this.state.outStats.DC}/> <br/>
            </>
        )
    }
}

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}><Calc/></Router>,
    document.getElementById('root')
);

// This is the CR chart with all of the max values
const crChart = [
    {CR: 0, PB: 2, AC: 13, HP: 6, AB: 3, DR: 1, DC: 13},
    {CR: 0.125, PB: 2, AC: 13, HP: 35, AB: 3, DR: 3, DC: 13},
    {CR: 0.25, PB: 2, AC: 13, HP: 49, AB: 3, DR: 5, DC: 13},
    {CR: 0.5, PB: 2, AC: 13, HP: 70, AB: 3, DR: 8, DC: 13},
    {CR: 1, PB: 2, AC: 13, HP: 85, AB: 3, DR: 14, DC: 13},
    {CR: 2, PB: 2, AC: 13, HP: 100, AB: 3, DR: 20, DC: 13},
    {CR: 3, PB: 2, AC: 13, HP: 115, AB: 4, DR: 26, DC: 13},
    {CR: 4, PB: 2, AC: 14, HP: 130, AB: 5, DR: 32, DC: 14},
    {CR: 5, PB: 3, AC: 15, HP: 145, AB: 6, DR: 28, DC: 15},
    {CR: 6, PB: 3, AC: 15, HP: 160, AB: 6, DR: 44, DC: 15},
    {CR: 7, PB: 3, AC: 15, HP: 175, AB: 6, DR: 50, DC: 15},
    {CR: 8, PB: 3, AC: 16, HP: 190, AB: 7, DR: 56, DC: 16},
    {CR: 9, PB: 4, AC: 16, HP: 205, AB: 7, DR: 62, DC: 16},
    {CR: 10, PB: 4, AC: 17, HP: 220, AB: 7, DR: 68, DC: 16},
    {CR: 11, PB: 4, AC: 17, HP: 235, AB: 8, DR: 74, DC: 17},
    {CR: 12, PB: 4, AC: 17, HP: 250, AB: 8, DR: 80, DC: 17},
    {CR: 13, PB: 5, AC: 18, HP: 265, AB: 8, DR: 86, DC: 18},
    {CR: 14, PB: 5, AC: 18, HP: 280, AB: 8, DR: 92, DC: 18},
    {CR: 15, PB: 5, AC: 18, HP: 295, AB: 8, DR: 98, DC: 18},
    {CR: 16, PB: 5, AC: 18, HP: 310, AB: 9, DR: 104, DC: 18},
    {CR: 17, PB: 6, AC: 19, HP: 325, AB: 10, DR: 110, DC: 19},
    {CR: 18, PB: 6, AC: 19, HP: 340, AB: 10, DR: 116, DC: 19},
    {CR: 19, PB: 6, AC: 19, HP: 355, AB: 10, DR: 122, DC: 19},
    {CR: 20, PB: 6, AC: 19, HP: 400, AB: 10, DR: 140, DC: 19},
    {CR: 21, PB: 7, AC: 19, HP: 445, AB: 11, DR: 158, DC: 20},
    {CR: 22, PB: 7, AC: 19, HP: 490, AB: 11, DR: 176, DC: 20},
    {CR: 23, PB: 7, AC: 19, HP: 535, AB: 11, DR: 194, DC: 20},
    {CR: 24, PB: 7, AC: 19, HP: 580, AB: 12, DR: 212, DC: 21},
    {CR: 25, PB: 8, AC: 19, HP: 625, AB: 12, DR: 230, DC: 21},
    {CR: 26, PB: 8, AC: 19, HP: 670, AB: 12, DR: 248, DC: 21},
    {CR: 27, PB: 8, AC: 19, HP: 715, AB: 13, DR: 266, DC: 22},
    {CR: 28, PB: 8, AC: 19, HP: 760, AB: 13, DR: 284, DC: 22},
    {CR: 29, PB: 9, AC: 19, HP: 805, AB: 13, DR: 302, DC: 22},
    {CR: 30, PB: 9, AC: 19, HP: 850, AB: 14, DR: 320, DC: 23}
];

// Do the monster math
function monsterMath(currentValue, maxThatValueCouldBeAtOurCurrentCR, maxThatValueCouldBeAtTheCRWeAreScalingTo) {
    return Math.floor(currentValue / maxThatValueCouldBeAtOurCurrentCR * maxThatValueCouldBeAtTheCRWeAreScalingTo);
}