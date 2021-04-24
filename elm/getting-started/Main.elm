-- Main.elm
module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text, h1)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment ->
      model + 1
    Decrement ->
      model - 1

view model =
  div []
    [ 
      h1 [] [ text (String.fromInt model) ],
      button [ onClick Decrement ] [ text "Decrement" ], 
      button [ onClick Increment ] [ text "Increment" ]
    ]