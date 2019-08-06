import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import App from '../App';

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<App />);
    const header = <h1 className="header">Bmi-Calculator</h1>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<App />);
    const weightLabel = <label>Weight</label>;
    const heightLabel = <label>Height</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('can change method', () => {
    const onChangeValue = stub();
    const component = shallow(<App onChangeValue={onChangeValue} />);
    const weightLabel = <label>Weight</label>;
    const heightLabel = <label>Height</label>;
    component.find("MethodSelect").prop('onChangeValue')({target: {value:'imperial'}});
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })
})

