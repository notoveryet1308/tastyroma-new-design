import styled from 'styled-components';

export const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1rem;
  /* background: #333; */

`
export const Label = styled.label`
 position: absolute;
  top: ${props => props.top};
  left:  ${props => props.left};
  font-size: 1.8rem;
  text-transform: capitalize;
  color:rgba(131, 127, 127, 1);

  opacity:  ${props => props.opacity};
  transition: all 300ms ease;
`
export const Input = styled.input`

  width: 100%;
  height: 4rem;
  background: rgba(131, 127, 127, 0.6);
  /* background: #fff; */
  border-radius: .5rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.8rem;
  caret-color: #FB4B4B;
  padding: .2rem 1.5rem;
  color:#FFF;
  
`