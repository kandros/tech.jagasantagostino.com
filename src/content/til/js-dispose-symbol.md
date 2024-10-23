---
title: JS Symbol dispose - run custom code when a var goes out of scope
pubDate: 19 Aug 2024
tags: 
- applescript
- spotify
- javascript
- garbage collection
---

I learned from [Matt Pocock](https://www.mattpocock.com/)'s  [post](https://x.com/i/status/1849038464315961616) that is possible to run custom code when a variable get's garbage collected in JS using the `Symbol.dispose` and and `Symbol.asyncDispose`


## Symbol.dispose
![dispose](https://media.cleanshot.cloud/media/363/dp53URTtNoxJWKtTrujgd6aqDIQ8uvyoxjvPgAMZ.jpeg?Expires=1729720018&Signature=nKj0aRpd07mZwbDvGv3ZkkEkiUxqvKsTOM1okj05hdKhazHgcR8hXqKW4koYHv6kE40u0X3kgGcL3fVI1wGxOKs5kGFfwEQ6vy61S4SToyrwuIX~npkOV~kQmNtJ6tRJKyFnVTs37rynRG-uJrt4Y-agvbF6nHfMLHY~l2dFeDejTBGC09cOaYa1uV9suSkaIBuMTgy8pndxPE03-JB8a0Lw4jhUEGCeMKVr~vz0xFvDnChryTcFvpih2yihEWBSdQZhc~onsVdAH7VJjT974lqD8Vmi8Apn4YtbCBdF~TVe9nitml6lCQH1QsL8AOu1-bz-AlHJiBOf3meyNE8gcg__&Key-Pair-Id=K269JMAT9ZF4GZ)
## Symbol.asyncDispose
![asyncDispose](https://media.cleanshot.cloud/media/363/0xk3jy8ozAZ1aIFMvJRuOVPRvGTMZ7ASWVVLgMBM.jpeg?Expires=1729720046&Signature=dnbtxwF2~PqqfL-ldEoipejRyxv42s5u76rL8klAq39oBVexdQTBapgcSiFvr077QQnsTCSdElT7XnWZxIm2IMINfS6IB7jhEKwOB6vG1cuT9F-ZglmyDF5iZ6kc79Lvx4NC-zpYqjof91cUo6JZEH6Jw2GIbOWwnHRHW3yH8qUeGq81FvqA4fzcDzPG1IqWUS5o36EvR4EvmwO~QBdp6hEkvPeRTMCvTebkqpBp2fPx3vO8MsP~f4ZH6P6ukwR5xolX1AymVZP0Rk6H6vh65IXCRYsgLMtiISb8h2uQWFMRDNA-f11qBnpCGYp~aJIdyCq-700zPWhW23v4XTpE~w__&Key-Pair-Id=K269JMAT9ZF4GZ)

Original video [https://x.com/i/status/1849038464315961616](https://x.com/i/status/1849038464315961616)

<!-- TODO: add link to what is a symbol in js? -->