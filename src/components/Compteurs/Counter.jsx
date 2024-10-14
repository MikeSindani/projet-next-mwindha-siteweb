"use client"
import React, { useState, useEffect } from 'react';

function Counter({ targetNumber, timer }) {
  // Initialisation de l'état du compteur
  const [counter, setCounter] = useState(0);

  // Fonction pour incrémenter le compteur
  const incrementCounter = () => {
    if (counter < targetNumber) {
      setCounter(counter + 1);
    }
  };

  // Effet pour démarrer le compteur automatiquement
  useEffect(() => {
    const intervalId = setInterval(incrementCounter, timer || 10); // Mettre à jour toutes les secondes
    return () => clearInterval(intervalId); // Nettoyer l'intervalle lorsqu'on quitte le composant
  }); // Dépendances vides, donc cet effet ne s'exécute qu'une fois

  return (<p className='font-primary-font'>{counter}</p>);
}

export default Counter;
