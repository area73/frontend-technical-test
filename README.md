# INTRO

This is a readme file for the Frontend Technical Test for [TeamITG]

Thanks for allowing me to take this awesome code challenge test, overall I had fun doing it and I hope it will be of your interest.

Below you can find more info about the decisions that I took to fulfill your requirements.

Please also check CHANGELOG.md where I state chronologically the things that I made, and why I did them.

*React.Suspense:* We could use react suspense to handle waiting or error states on components that
are fetching external data like the one we have on VehicleList.

This utility is very handy and removes some code from the original component, but I didn't
implement it because on your package.json you have set react version to "react": "^17.0.1", and this
code is experimental until version 18.
