-- Main.elm
module Main exposing (main)

import Browser
import Html exposing (Html, Attribute, button, div, text, h1, input)
import Html.Events exposing (onClick)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

main =
  Browser.sandbox { init = init, update = update, view = view }

type alias Model = 
  { 
    content : String
  }

init: Model
init = { content = ""}

type Msg = Reverse | Change String

update: Msg -> Model -> Model
update msg model =
  case msg of
    Change newContent ->
      {
        model | content = newContent
      }
    Reverse ->
      {
        model | content = String.reverse model.content
      }

view : Model -> Html Msg
view model =
  div []
    [ 
      h1 [] [ text model.content ],
      input [ placeholder "Text to reverse", value model.content, onInput Change] [],
      button [ onClick Reverse ] [ text "Increment" ]
    ]