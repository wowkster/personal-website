import './Background.css'
import laptop from './img/laptop.png';
import node from './img/node.png'
import react from './img/react.png'
import fastify from './img/fastify.png'
import redux from './img/redux.png'

export default function Background() {
    return (
        <div className="background">
            <div className="big-circle circle"></div>
            <div className="small-circle circle"></div>
            <div className="tiny-circle circle"></div>
            <div className="super-tiny-circle circle"></div>
            <img className="laptop" src={laptop} alt="Laptop" />

            <div className="bubble node-bubble">
                <img src={node} alt="Node JS" />
            </div>
            <div className="bubble react-bubble">
                <img src={react} alt="React JS" />
            </div>
            <div className="bubble fastify-bubble">
                <img src={fastify} alt="Fastify JS" />
            </div>
            <div className="bubble redux-bubble">
                <img src={redux} alt="Redux" />
            </div>
        </div>
    )
}