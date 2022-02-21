import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form(){

    const [heigth, setHeigth] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc((weigth / (heigth * heigth)).toFixed(2))
    }

    function validateImc(){
        if(weigth != null && heigth != null){
            imcCalculator()
            setHeigth(null)
            setWeigth(null)
            setMessageImc("Seu Imc é igual a:")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o Peso e a Altura")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input}
                  onChangeText={setHeigth}
                  value={heigth}
                  placeholder="Ex: 1.71"
                  keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                  onChangeText={setWeigth}
                  value={weigth}
                  placeholder="Ex: 60.3"
                  keyboardType="numeric"
                />
            
                <TouchableOpacity 
                style={styles.buttonCalculator}
                 onPress={()=> {
                    validateImc()
                  }}
                >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>  
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}