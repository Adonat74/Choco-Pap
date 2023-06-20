import "./Accueil.css"

export default function RadioButtons (props) {

    const styles = {
        backgroundColor: props.clicked ? "#55C0CF" : "#fefefe"
    };

    return (
        <a   
            onClick={() => props.changeStyle(props.id - 1)} 
            className="sliderNavlink"
            style={styles}
            href={"#slide" + props.id}
        ></a>
    );
}
