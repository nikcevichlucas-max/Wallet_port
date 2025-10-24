import {Fragment,lazy,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Card as RadixThemesCard,DropdownMenu as RadixThemesDropdownMenu,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,ScrollArea as RadixThemesScrollArea,Section as RadixThemesSection,Separator as RadixThemesSeparator,Table as RadixThemesTable,Text as RadixThemesText,TextArea as RadixThemesTextArea,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {ClientSide,ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue} from "$/utils/state"
import {ChevronDown as LucideChevronDown,Menu as LucideMenu} from "lucide-react"
import DebounceInput from "react-debounce-input"
import {mergician} from "mergician"
import {jsx} from "@emotion/react"

const Moment = ClientSide(lazy(() => import('react-moment')))
const Plot = ClientSide(lazy(() => import('react-plotly.js')))


function Heading_ab98886e19a1adade08e5c371f56c7ac () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesHeading,{color:"mint"},reflex___state____state__portafolio___portafolio___estado.redondeoganancia_rx_state_)
  )
}


function Heading_2dd91057473e17bf9c01109821f10bfc () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesHeading,{color:"mint"},reflex___state____state__portafolio___portafolio___estado.portafoliototal_rx_state_)
  )
}


function Button_cd02ed9dbb53348e56160e2acbc74346 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f4e10a9c5e8dcd8ea5fecf1bca6ce7ec = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.cambiar_vista", ({ ["vista"] : "inicio" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["transition"] : "all 0.3s ease" }),onClick:on_click_f4e10a9c5e8dcd8ea5fecf1bca6ce7ec,size:"3",variant:"ghost"},"INICIO")
  )
}


function Dropdownmenu__item_5402073e3ab2a44e731f2b91597a5218 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ad1d6dc84b2c6b93ad735f142b4961e5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.cambiar_vista", ({ ["vista"] : "infobot" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesDropdownMenu.Item,{color:"mint",onClick:on_click_ad1d6dc84b2c6b93ad735f142b4961e5},"ASESOR INTELIGENTE")
  )
}


function Dropdownmenu__item_d7ef33bfd834d87b1047294387bf637f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5a9c5825905f5d70c7012426080c4554 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.cambiar_vista", ({ ["vista"] : "max min" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesDropdownMenu.Item,{color:"mint",onClick:on_click_5a9c5825905f5d70c7012426080c4554},"mayores rendimientos y perdidas")
  )
}


function Debounceinput_037513a7951bb9d845571ed7f0e2788d () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9a4d63277592ecec02ac125eb20375e7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.set_busqueda", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const on_key_down_97536aa18a3d34ad35a5c0ffcbc802be = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.enter_buscar", ({ ["key"] : _e?.["key"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "400px" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_9a4d63277592ecec02ac125eb20375e7,onKeyDown:on_key_down_97536aa18a3d34ad35a5c0ffcbc802be,placeholder:"obtenga un an\u00e1lisis profundo de su acci\u00f3n.EJ:tsla..",size:"3",value:(isNotNullOrUndefined(reflex___state____state__portafolio___portafolio___estado.busqueda_rx_state_.toUpperCase()) ? reflex___state____state__portafolio___portafolio___estado.busqueda_rx_state_.toUpperCase() : "")},)
  )
}


function Button_c19354c7d95cab65816cd9b82e19075c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6ae88fc22072a7e3a95145349588aa7f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.buscar_accion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"mint",css:({ ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["transition"] : "all 0.3s ease" }),onClick:on_click_6ae88fc22072a7e3a95145349588aa7f,size:"2"},"BUSCAR")
  )
}


function Dropdownmenu__item_eeeb1c670302cb092c0de80811e04f52 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_bc05dbcf8c7009f45381474b58479b36 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.cambiar_vista", ({ ["vista"] : "asesor" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesDropdownMenu.Item,{onClick:on_click_bc05dbcf8c7009f45381474b58479b36},"ASESOR INTELIGENTE")
  )
}


function Dropdownmenu__item_8ff32b3b706b41847847a88aa512dc83 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f4722b01934d69af046e25f73ca79a29 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.cambiar_vista", ({ ["vista"] : "mas menos" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesDropdownMenu.Item,{onClick:on_click_f4722b01934d69af046e25f73ca79a29},"mayores rendimientos y perdidas")
  )
}


function Button_48b83cea4400b579f5efbf29578d77fe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_756d85cd372000781b072fe9ce3eab23 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.cambiar_vista", ({ ["vista"] : "agregar acci\u00f3n" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"mint",css:({ ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["transition"] : "all 0.3s ease" }),onClick:on_click_756d85cd372000781b072fe9ce3eab23},"a\u00f1adir")
  )
}


function Button_8248e3cc48068e833fbb62ecacdc27d2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ca7e415418225e1491a698865b8b796b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.cambiar_vista", ({ ["vista"] : "quitar accion" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"mint",css:({ ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["transition"] : "all 0.3s ease" }),onClick:on_click_ca7e415418225e1491a698865b8b796b},"quitar")
  )
}


function Fragment_4d846221ac06bc7b3c6325975b72e811 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.portafolio_rx_state_.length?.valueOf?.() === 0?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["size"] : "6", ["colorScheme"] : "mint" })},"portafolio vacio"))):(jsx(Fragment,{},))))
  )
}


function Table__body_99f79e11d52382046ed3e01ef6820cac () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__portafolio___portafolio___estado.portafolio_rx_state_ ?? [],((accion_rx_state_,index_23dfcdfcb3210bd904ff54eac4d521a4)=>(jsx(RadixThemesTable.Row,{css:({ ["colorScheme"] : "mint" }),key:index_23dfcdfcb3210bd904ff54eac4d521a4},jsx(RadixThemesTable.ColumnHeaderCell,{},accion_rx_state_?.["ticker"]),jsx(RadixThemesTable.Cell,{},accion_rx_state_?.["monto_invertido"]),jsx(RadixThemesTable.Cell,{},accion_rx_state_?.["rendimiento"]))))))
  )
}


function Fragment_951b79faf4de1e91a6670b05bc64f0e6 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.portafolio_rx_state_.length?.valueOf?.() !== 0?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesTable.Root,{},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{css:({ ["colorScheme"] : "mint" })},jsx(RadixThemesTable.ColumnHeaderCell,{},"ticker"),jsx(RadixThemesTable.ColumnHeaderCell,{},"monto"),jsx(RadixThemesTable.ColumnHeaderCell,{},"rendimiento"))),jsx(Table__body_99f79e11d52382046ed3e01ef6820cac,{},)))):(jsx(Fragment,{},))))
  )
}


function Table__rowheadercell_27f90e168bc73244be1357751c276ddd () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesTable.RowHeaderCell,{},reflex___state____state__portafolio___portafolio___estado.inversion_total_rx_state_)
  )
}


function Table__cell_6281eb1a6be91ad55b9b25d2f7c0f603 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesTable.Cell,{},reflex___state____state__portafolio___portafolio___estado.redondeoganancia_rx_state_)
  )
}


function Table__cell_6e2bed763a4bc00aa000550def629d86 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesTable.Cell,{},reflex___state____state__portafolio___portafolio___estado.portafoliototal_rx_state_)
  )
}


function Fragment_82bc2aa1782702012da5977454e965b1 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.portafolio_rx_state_.length?.valueOf?.() !== 0?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" })},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{css:({ ["colorScheme"] : "mint" })},jsx(RadixThemesTable.ColumnHeaderCell,{},"inversi\u00f3n"),jsx(RadixThemesTable.ColumnHeaderCell,{},"ganancias"),jsx(RadixThemesTable.ColumnHeaderCell,{},"total"))),jsx(RadixThemesTable.Body,{},jsx(RadixThemesTable.Row,{css:({ ["colorScheme"] : "mint" })},jsx(Table__rowheadercell_27f90e168bc73244be1357751c276ddd,{},),jsx(Table__cell_6281eb1a6be91ad55b9b25d2f7c0f603,{},),jsx(Table__cell_6e2bed763a4bc00aa000550def629d86,{},)))))):(jsx(Fragment,{},))))
  )
}

const removeUndefined = (obj) => {Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]); return obj}

const extractPoints = (points) => {
    if (!points) return [];
    return points.map(point => {
        const bbox = point.bbox ? removeUndefined({
            x0: point.bbox.x0,
            x1: point.bbox.x1,
            y0: point.bbox.y0,
            y1: point.bbox.y1,
            z0: point.bbox.y0,
            z1: point.bbox.y1,
        }) : undefined;
        return removeUndefined({
            x: point.x,
            y: point.y,
            z: point.z,
            lat: point.lat,
            lon: point.lon,
            curveNumber: point.curveNumber,
            pointNumber: point.pointNumber,
            pointNumbers: point.pointNumbers,
            pointIndex: point.pointIndex,
            markerColor: point['marker.color'],
            markerSize: point['marker.size'],
            bbox: bbox,
        })
    })
}


function Plot_d76987b35ca7dcf041786eb25c9057d4 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)
const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Plot,{useResizeHandler:true,...{...mergician(reflex___state____state__portafolio___portafolio___estado.figura_torta_rx_state_,({ ["layout"] : ({ ["template"] : ((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["fillpattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#2a3f5f" }), ["error_y"] : ({ ["color"] : "#2a3f5f" }), ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["type"] : "scattergl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["baxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#EBF0F8" }), ["line"] : ({ ["color"] : "white" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#C8D4E3" }), ["line"] : ({ ["color"] : "white" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#2a3f5f" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "white", ["plot_bgcolor"] : "#E5ECF6", ["polar"] : ({ ["bgcolor"] : "#E5ECF6", ["angularaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "#E5ECF6", ["aaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#2a3f5f" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#2a3f5f", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "white", ["landcolor"] : "#E5ECF6", ["subunitcolor"] : "white", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "white" }), ["title"] : ({ ["x"] : 0.05 }), ["mapbox"] : ({ ["style"] : "light" }) }) }) : ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#f2f5fa" }), ["error_y"] : ({ ["color"] : "#f2f5fa" }), ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scattergl" })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["baxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#506784" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#2a3f5f" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#f2f5fa" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "rgb(17,17,17)", ["plot_bgcolor"] : "rgb(17,17,17)", ["polar"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["angularaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["aaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#f2f5fa" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#f2f5fa", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["landcolor"] : "rgb(17,17,17)", ["subunitcolor"] : "#506784", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "rgb(17,17,17)" }), ["title"] : ({ ["x"] : 0.05 }), ["updatemenudefaults"] : ({ ["bgcolor"] : "#506784", ["borderwidth"] : 0 }), ["sliderdefaults"] : ({ ["bgcolor"] : "#C8D4E3", ["borderwidth"] : 1, ["bordercolor"] : "rgb(17,17,17)", ["tickwidth"] : 0 }), ["mapbox"] : ({ ["style"] : "dark" }) }) })) }) }))}},)
  )
}


function Plot_f871d5290bf23140a984dbf9467842b1 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)
const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Plot,{useResizeHandler:true,...{...mergician(reflex___state____state__portafolio___portafolio___estado.heatmap_correlacion_rx_state_,({ ["layout"] : ({ ["template"] : ((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["fillpattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#2a3f5f" }), ["error_y"] : ({ ["color"] : "#2a3f5f" }), ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["type"] : "scattergl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["baxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#EBF0F8" }), ["line"] : ({ ["color"] : "white" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#C8D4E3" }), ["line"] : ({ ["color"] : "white" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#2a3f5f" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "white", ["plot_bgcolor"] : "#E5ECF6", ["polar"] : ({ ["bgcolor"] : "#E5ECF6", ["angularaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "#E5ECF6", ["aaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#2a3f5f" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#2a3f5f", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "white", ["landcolor"] : "#E5ECF6", ["subunitcolor"] : "white", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "white" }), ["title"] : ({ ["x"] : 0.05 }), ["mapbox"] : ({ ["style"] : "light" }) }) }) : ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#f2f5fa" }), ["error_y"] : ({ ["color"] : "#f2f5fa" }), ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scattergl" })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["baxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#506784" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#2a3f5f" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#f2f5fa" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "rgb(17,17,17)", ["plot_bgcolor"] : "rgb(17,17,17)", ["polar"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["angularaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["aaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#f2f5fa" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#f2f5fa", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["landcolor"] : "rgb(17,17,17)", ["subunitcolor"] : "#506784", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "rgb(17,17,17)" }), ["title"] : ({ ["x"] : 0.05 }), ["updatemenudefaults"] : ({ ["bgcolor"] : "#506784", ["borderwidth"] : 0 }), ["sliderdefaults"] : ({ ["bgcolor"] : "#C8D4E3", ["borderwidth"] : 1, ["bordercolor"] : "rgb(17,17,17)", ["tickwidth"] : 0 }), ["mapbox"] : ({ ["style"] : "dark" }) }) })) }) }))}},)
  )
}


function Text_444d21c2cf3f70622e87a3aea52dc33b () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p"},((reflex___state____state__portafolio___portafolio___estado.volatilidad_portafolio_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(2)).replaceAll(',', ""))+"%"))
  )
}


function Text_e487cba2a60222849d3e1482d2c2928b () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p"},((reflex___state____state__portafolio___portafolio___estado.shape_ratio_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(2)).replaceAll(',', ""))+"%"))
  )
}


function Table__body_b64fcd42caaf95ea3c98a123518f0275 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__portafolio___portafolio___estado.dividendos_rx_state_ ?? [],((div_rx_state_,index_f9f962eee5cd8d5f158cdd0515b4ffb0)=>(jsx(RadixThemesTable.Row,{css:({ ["colorScheme"] : "mint" }),key:index_f9f962eee5cd8d5f158cdd0515b4ffb0},jsx(RadixThemesTable.Cell,{},div_rx_state_?.["ticker"]),jsx(RadixThemesTable.Cell,{},div_rx_state_?.["ultimo"]),jsx(RadixThemesTable.Cell,{},div_rx_state_?.["actual"]),jsx(RadixThemesTable.Cell,{},div_rx_state_?.["hist\u00f3rico"]),jsx(RadixThemesTable.Cell,{},div_rx_state_?.["5a\u00f1os"]))))))
  )
}


function Plot_1b9e10a3c7c1eff6049c4e5b89fdf25e () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)
const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Plot,{useResizeHandler:true,...{...mergician(reflex___state____state__portafolio___portafolio___estado.figura_crecimiento_rx_state_,({ ["layout"] : ({ ["template"] : ((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["fillpattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#2a3f5f" }), ["error_y"] : ({ ["color"] : "#2a3f5f" }), ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["type"] : "scattergl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["baxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#EBF0F8" }), ["line"] : ({ ["color"] : "white" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#C8D4E3" }), ["line"] : ({ ["color"] : "white" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#2a3f5f" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "white", ["plot_bgcolor"] : "#E5ECF6", ["polar"] : ({ ["bgcolor"] : "#E5ECF6", ["angularaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "#E5ECF6", ["aaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#2a3f5f" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#2a3f5f", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "white", ["landcolor"] : "#E5ECF6", ["subunitcolor"] : "white", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "white" }), ["title"] : ({ ["x"] : 0.05 }), ["mapbox"] : ({ ["style"] : "light" }) }) }) : ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#f2f5fa" }), ["error_y"] : ({ ["color"] : "#f2f5fa" }), ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scattergl" })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["baxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#506784" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#2a3f5f" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#f2f5fa" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "rgb(17,17,17)", ["plot_bgcolor"] : "rgb(17,17,17)", ["polar"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["angularaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["aaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#f2f5fa" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#f2f5fa", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["landcolor"] : "rgb(17,17,17)", ["subunitcolor"] : "#506784", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "rgb(17,17,17)" }), ["title"] : ({ ["x"] : 0.05 }), ["updatemenudefaults"] : ({ ["bgcolor"] : "#506784", ["borderwidth"] : 0 }), ["sliderdefaults"] : ({ ["bgcolor"] : "#C8D4E3", ["borderwidth"] : 1, ["bordercolor"] : "rgb(17,17,17)", ["tickwidth"] : 0 }), ["mapbox"] : ({ ["style"] : "dark" }) }) })) }) }))}},)
  )
}


function Fragment_08947f9304ad127e8c4d79f503005b57 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.vista_actual_rx_state_?.valueOf?.() === "inicio"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"column",justify:"center",gap:"3"},jsx(RadixThemesHeading,{color:"mint",size:"6",weight:"bold"},"mi portafolio"),jsx(RadixThemesSeparator,{color:"mint",orientation:"horizontal",size:"3"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"indigo",size:"3",weight:"bold"},"a\u00f1adir acci\u00f3n al portafolio"),jsx(Button_48b83cea4400b579f5efbf29578d77fe,{},),jsx(RadixThemesHeading,{color:"indigo",size:"3"},"quitar accion de mi portafolio"),jsx(Button_8248e3cc48068e833fbb62ecacdc27d2,{},)),jsx(RadixThemesSeparator,{color:"mint",css:({ ["spacing"] : "9" }),orientation:"horizontal",size:"4"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"indigo"},"lista de acciones en el portafolio"),jsx(RadixThemesScrollArea,{css:({ ["width"] : "100%" })},jsx(Fragment_4d846221ac06bc7b3c6325975b72e811,{},),jsx(Fragment_951b79faf4de1e91a6670b05bc64f0e6,{},)),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesHeading,{color:"indigo"},"ganancias"),jsx(Fragment_82bc2aa1782702012da5977454e965b1,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"mint"},"GRAFICO DE DIVERSIFICACI\u00d3N"),jsx(Plot_d76987b35ca7dcf041786eb25c9057d4,{},)),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"mint",size:"5"},"correlaci\u00f3n"),jsx(Plot_f871d5290bf23140a984dbf9467842b1,{},)))),jsx(RadixThemesSection,{css:({ ["spacing"] : "5" }),size:"2"},jsx(RadixThemesHeading,{color:"mint"},"analisis de riesgo"),jsx(RadixThemesSeparator,{orientation:"horizontal",size:"3"},),jsx(RadixThemesCard,{},jsx(RadixThemesHeading,{color:"indigo"},"VOLATILIDAD DEL PORTAFOLIO"),jsx(Text_444d21c2cf3f70622e87a3aea52dc33b,{},)),jsx(RadixThemesSeparator,{orientation:"horizontal",size:"3"},),jsx(RadixThemesCard,{css:({ ["colorScheme"] : "mint" })},jsx(RadixThemesHeading,{},"shape ratio"),jsx(Text_e487cba2a60222849d3e1482d2c2928b,{},))),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"indigo"},"dividendos"),jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" })},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{css:({ ["colorScheme"] : "mint" })},jsx(RadixThemesTable.ColumnHeaderCell,{},"ticker"),jsx(RadixThemesTable.ColumnHeaderCell,{},"ult. dividendo"),jsx(RadixThemesTable.ColumnHeaderCell,{},"actual"),jsx(RadixThemesTable.ColumnHeaderCell,{},"hist\u00f3rico"),jsx(RadixThemesTable.ColumnHeaderCell,{},"prom.5 a\u00f1os"))),jsx(Table__body_b64fcd42caaf95ea3c98a123518f0275,{},))),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"mint"},"analisis de crecimiento futuro"),jsx(Plot_1b9e10a3c7c1eff6049c4e5b89fdf25e,{},),jsx(RadixThemesCard,{},jsx(RadixThemesFlex,{},jsx(RadixThemesHeading,{color:"mint"},"este an\u00e1lisis no cuenta con\n                                 la periodicidad de aportes.")))))))):(jsx(Fragment,{},))))
  )
}


function Textfield__root_ebd5251dfc72914aa3a2c6b9bfc08eb8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_60986024505b342321a10f0cc98aeebe = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.set_ticker", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextField.Root,{color:"mint",onChange:on_change_60986024505b342321a10f0cc98aeebe,placeholder:"AAPL"},)
  )
}


function Textfield__root_0e0df2a18138d0fe7406d643737d95bf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_3036e08e6c862316cdde5f6fcaa4dc24 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.set_cantidad", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextField.Root,{color:"mint",onChange:on_change_3036e08e6c862316cdde5f6fcaa4dc24,type:"number"},)
  )
}


function Textfield__root_8e9ee5616975258dd78a11529e17f888 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_683be84aedb54f0d10b39e2bbfbdb389 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.set_fecha", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const on_key_up_2131f81674a56876b405a84aba168400 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.enter_a\u00f1adir", ({ ["key"] : _e?.["key"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextField.Root,{onChange:on_change_683be84aedb54f0d10b39e2bbfbdb389,onKeyUp:on_key_up_2131f81674a56876b405a84aba168400,type:"date"},)
  )
}


function Button_d0b82fd46d34ede91c4b3d821e8c6261 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_97e1a493fcd0fe5ae8842b9d06ef6d6b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.guardarenportafolio", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"indigo",css:({ ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["transition"] : "all 0.3s ease" }),onClick:on_click_97e1a493fcd0fe5ae8842b9d06ef6d6b},"guardar acci\u00f3n")
  )
}


function Fragment_30349efd9dbc6049e4759922835fbc67 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.vista_actual_rx_state_?.valueOf?.() === "agregar acci\u00f3n"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"column",gap:"4"},jsx(RadixThemesHeading,{color:"indigo",size:"5",weight:"bold"},"A\u00d1ADE UNA ACCION A TU PORTAFOLIO"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"mint"},"defina el ticker que desea a\u00f1adir"),jsx(Textfield__root_ebd5251dfc72914aa3a2c6b9bfc08eb8,{},))),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"mint"},"cantidad invertida(en d\u00f3lares)"),jsx(Textfield__root_0e0df2a18138d0fe7406d643737d95bf,{},))),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"mint"},"fecha de adquisici\u00f3n"),jsx(Textfield__root_8e9ee5616975258dd78a11529e17f888,{},))),jsx(RadixThemesSeparator,{color:"mint",orientation:"horizontal",size:"1"},),jsx(Button_d0b82fd46d34ede91c4b3d821e8c6261,{},),jsx(RadixThemesText,{as:"p"},"tenga en cuenta que desde la fecha de adquisici\u00f3n, hasta la fecha actual, el monto habr\u00e1 variado, introduzca el monto que compro, no el que posee"),jsx(RadixThemesText,{as:"p"},"si se a\u00f1ade una accion, ya incluida al portafolio, se sumara a la porci\u00f3n inicial"),jsx(RadixThemesText,{as:"p"},"al a\u00f1adir, la web se tomar\u00e1 unos segundas para realizar el an\u00e1lisis de datos"))))):(jsx(Fragment,{},))))
  )
}


function Heading_9e255924b8af2f23214d745894472b74 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesHeading,{color:"mint",size:"5",weight:"bold"},reflex___state____state__portafolio___portafolio___estado.busqueda_rx_state_.toUpperCase())
  )
}


function Heading_cacd0cea4e78884d8d49b3b8c56ae53f () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesHeading,{color:"indigo"},("gr\u00e1fico de evoluci\u00f3n de "+reflex___state____state__portafolio___portafolio___estado.busqueda_rx_state_.toUpperCase()+" desde la fecha de compra"))
  )
}


function Plot_c23e2094ca5f43acec0702e0a4d3c707 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)
const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Plot,{useResizeHandler:true,...{...mergician(reflex___state____state__portafolio___portafolio___estado.grafico_accion_rx_state_,({ ["layout"] : ({ ["template"] : ((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["fillpattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#2a3f5f" }), ["error_y"] : ({ ["color"] : "#2a3f5f" }), ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["type"] : "scattergl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["baxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#EBF0F8" }), ["line"] : ({ ["color"] : "white" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#C8D4E3" }), ["line"] : ({ ["color"] : "white" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#2a3f5f" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "white", ["plot_bgcolor"] : "#E5ECF6", ["polar"] : ({ ["bgcolor"] : "#E5ECF6", ["angularaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "#E5ECF6", ["aaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#2a3f5f" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#2a3f5f", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "white", ["landcolor"] : "#E5ECF6", ["subunitcolor"] : "white", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "white" }), ["title"] : ({ ["x"] : 0.05 }), ["mapbox"] : ({ ["style"] : "light" }) }) }) : ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#f2f5fa" }), ["error_y"] : ({ ["color"] : "#f2f5fa" }), ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scattergl" })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["baxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#506784" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#2a3f5f" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#f2f5fa" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "rgb(17,17,17)", ["plot_bgcolor"] : "rgb(17,17,17)", ["polar"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["angularaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["aaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#f2f5fa" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#f2f5fa", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["landcolor"] : "rgb(17,17,17)", ["subunitcolor"] : "#506784", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "rgb(17,17,17)" }), ["title"] : ({ ["x"] : 0.05 }), ["updatemenudefaults"] : ({ ["bgcolor"] : "#506784", ["borderwidth"] : 0 }), ["sliderdefaults"] : ({ ["bgcolor"] : "#C8D4E3", ["borderwidth"] : 1, ["bordercolor"] : "rgb(17,17,17)", ["tickwidth"] : 0 }), ["mapbox"] : ({ ["style"] : "dark" }) }) })) }) }))}},)
  )
}


function Text_c5f95c160ba70c645d456813510eb8e3 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},("$"+(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["precio_actual"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["precio_actual"] : 0)))
  )
}


function Text_4087baa67f40982ce53becd066eb3a67 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},("$"+(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["precio_compra"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["precio_compra"] : 0)))
  )
}


function Text_8db858fafb0e7687e4d72f1b90d369bc () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["volumen"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["volumen"] : "N/A"))
  )
}


function Text_fb06831b04e8ec681e9aa90c6484ef85 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["pe_ratio"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["pe_ratio"] : 0))
  )
}


function Text_2219c81d4e1cf6992bbb9f53183e7af7 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},("$"+(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["market_cap"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["market_cap"] : 0)))
  )
}


function Text_5e7132e29244d1d79b89e351ee70fa5d () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},("$"+(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["deuda"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["deuda"] : 0)))
  )
}


function Text_a56824652f62fd3ab9e1f05dd64b83ee () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["profit_margin"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["profit_margin"] : 0))
  )
}


function Text_6c0ab0d08bb41f370abd5f775e380a83 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},(isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["beta"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["beta"] : 0))
  )
}


function Text_6e5a35015881405e787b98b823356305 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},((isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_dia"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_dia"] : 0)+"%"))
  )
}


function Text_860c72d4cff16edd017d781a13e3afa8 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},((isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_semana"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_semana"] : 0)+"%"))
  )
}


function Text_2fb6faf85249754dbabe5bb170a2988a () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},((isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_mes"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_mes"] : 0)+"%"))
  )
}


function Text_807bc3f11e6a944682494c4bcd07fdde () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",color:"mint"},((isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_desde_compra"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["var_desde_compra"] : 0)+"%"))
  )
}


function Fragment_62c75c6637b0230c784916c83d0ebb29 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},(!(((isTrue(reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["ticker"]) ? reflex___state____state__portafolio___portafolio___estado.analisis_accion_completo_rx_state_?.["ticker"] : null)?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesGrid,{align:"center",columns:"2",css:({ ["background"] : "mint" }),gap:"6"},jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["color"] : "mint", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Precio Actual"),jsx(Text_c5f95c160ba70c645d456813510eb8e3,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "mint", ["color"] : "indigo", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Precio al momento de Compra"),jsx(Text_4087baa67f40982ce53becd066eb3a67,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["color"] : "mint", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Volumen"),jsx(Text_8db858fafb0e7687e4d72f1b90d369bc,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "mint", ["color"] : "indigo", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"P/E Ratio"),jsx(Text_fb06831b04e8ec681e9aa90c6484ef85,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["color"] : "mint", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Market Cap"),jsx(Text_2219c81d4e1cf6992bbb9f53183e7af7,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["color"] : "mint", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Deuda total de la empresa"),jsx(Text_5e7132e29244d1d79b89e351ee70fa5d,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "mint", ["color"] : "indigo", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Profit Margin"),jsx(Text_a56824652f62fd3ab9e1f05dd64b83ee,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["color"] : "mint", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Beta"),jsx(Text_6c0ab0d08bb41f370abd5f775e380a83,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "mint", ["color"] : "indigo", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Var. D\u00eda"),jsx(Text_6e5a35015881405e787b98b823356305,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["color"] : "mint", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Var. Semana"),jsx(Text_860c72d4cff16edd017d781a13e3afa8,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "mint", ["color"] : "indigo", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Var. Mes"),jsx(Text_2fb6faf85249754dbabe5bb170a2988a,{},)),jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["color"] : "mint", ["padding"] : "25px", ["borderRadius"] : "20px", ["width"] : "350px" })},jsx(RadixThemesHeading,{color:"mint",size:"3"},"Var. Desde Compra"),jsx(Text_807bc3f11e6a944682494c4bcd07fdde,{},))))):(jsx(Fragment,{},))))
  )
}


function Text_9504ddb8ff6f65b9f1061c10ae65cbdf () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",weight:"bold"},reflex___state____state__portafolio___portafolio___estado.busqueda_match_rx_state_?.["rendimiento"])
  )
}


function Text_b8ef7c3f4aa276885e1b4b61848476c5 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesText,{as:"p",weight:"bold"},(reflex___state____state__portafolio___portafolio___estado.volatilidadindividual_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(2)).replaceAll(',', "")))
  )
}


function Plot_34f74644c56a2fce2c7defeb6b6a6a40 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)
const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Plot,{useResizeHandler:true,...{...mergician(reflex___state____state__portafolio___portafolio___estado.creci_indi_rx_state_,({ ["layout"] : ({ ["template"] : ((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["fillpattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#2a3f5f" }), ["error_y"] : ({ ["color"] : "#2a3f5f" }), ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["type"] : "scattergl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["baxis"] : ({ ["endlinecolor"] : "#2a3f5f", ["gridcolor"] : "white", ["linecolor"] : "white", ["minorgridcolor"] : "white", ["startlinecolor"] : "#2a3f5f" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#EBF0F8" }), ["line"] : ({ ["color"] : "white" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#C8D4E3" }), ["line"] : ({ ["color"] : "white" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#E5ECF6", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#2a3f5f" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "white", ["plot_bgcolor"] : "#E5ECF6", ["polar"] : ({ ["bgcolor"] : "#E5ECF6", ["angularaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "#E5ECF6", ["aaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "white", ["linecolor"] : "white", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "white", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "#E5ECF6", ["gridcolor"] : "white", ["linecolor"] : "white", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "white", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#2a3f5f" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#2a3f5f", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "white", ["landcolor"] : "#E5ECF6", ["subunitcolor"] : "white", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "white" }), ["title"] : ({ ["x"] : 0.05 }), ["mapbox"] : ({ ["style"] : "light" }) }) }) : ({ ["data"] : ({ ["histogram2dcontour"] : [({ ["type"] : "histogram2dcontour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["choropleth"] : [({ ["type"] : "choropleth", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["histogram2d"] : [({ ["type"] : "histogram2d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["heatmap"] : [({ ["type"] : "heatmap", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["contourcarpet"] : [({ ["type"] : "contourcarpet", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["contour"] : [({ ["type"] : "contour", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["surface"] : [({ ["type"] : "surface", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }), ["colorscale"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] })], ["mesh3d"] : [({ ["type"] : "mesh3d", ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) })], ["scatter"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scatter" })], ["parcoords"] : [({ ["type"] : "parcoords", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolargl"] : [({ ["type"] : "scatterpolargl", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["bar"] : [({ ["error_x"] : ({ ["color"] : "#f2f5fa" }), ["error_y"] : ({ ["color"] : "#f2f5fa" }), ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "bar" })], ["scattergeo"] : [({ ["type"] : "scattergeo", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterpolar"] : [({ ["type"] : "scatterpolar", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["histogram"] : [({ ["marker"] : ({ ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "histogram" })], ["scattergl"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "#283442" }) }), ["type"] : "scattergl" })], ["scatter3d"] : [({ ["type"] : "scatter3d", ["line"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermap"] : [({ ["type"] : "scattermap", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattermapbox"] : [({ ["type"] : "scattermapbox", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scatterternary"] : [({ ["type"] : "scatterternary", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["scattercarpet"] : [({ ["type"] : "scattercarpet", ["marker"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }) })], ["carpet"] : [({ ["aaxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["baxis"] : ({ ["endlinecolor"] : "#A2B1C6", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["minorgridcolor"] : "#506784", ["startlinecolor"] : "#A2B1C6" }), ["type"] : "carpet" })], ["table"] : [({ ["cells"] : ({ ["fill"] : ({ ["color"] : "#506784" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["header"] : ({ ["fill"] : ({ ["color"] : "#2a3f5f" }), ["line"] : ({ ["color"] : "rgb(17,17,17)" }) }), ["type"] : "table" })], ["barpolar"] : [({ ["marker"] : ({ ["line"] : ({ ["color"] : "rgb(17,17,17)", ["width"] : 0.5 }), ["pattern"] : ({ ["fillmode"] : "overlay", ["size"] : 10, ["solidity"] : 0.2 }) }), ["type"] : "barpolar" })], ["pie"] : [({ ["automargin"] : true, ["type"] : "pie" })] }), ["layout"] : ({ ["autotypenumbers"] : "strict", ["colorway"] : ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], ["font"] : ({ ["color"] : "#f2f5fa" }), ["hovermode"] : "closest", ["hoverlabel"] : ({ ["align"] : "left" }), ["paper_bgcolor"] : "rgb(17,17,17)", ["plot_bgcolor"] : "rgb(17,17,17)", ["polar"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["angularaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["radialaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["ternary"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["aaxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["baxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }), ["caxis"] : ({ ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["ticks"] : "" }) }), ["coloraxis"] : ({ ["colorbar"] : ({ ["outlinewidth"] : 0, ["ticks"] : "" }) }), ["colorscale"] : ({ ["sequential"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["sequentialminus"] : [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], ["diverging"] : [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]] }), ["xaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["yaxis"] : ({ ["gridcolor"] : "#283442", ["linecolor"] : "#506784", ["ticks"] : "", ["title"] : ({ ["standoff"] : 15 }), ["zerolinecolor"] : "#283442", ["automargin"] : true, ["zerolinewidth"] : 2 }), ["scene"] : ({ ["xaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["yaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }), ["zaxis"] : ({ ["backgroundcolor"] : "rgb(17,17,17)", ["gridcolor"] : "#506784", ["linecolor"] : "#506784", ["showbackground"] : true, ["ticks"] : "", ["zerolinecolor"] : "#C8D4E3", ["gridwidth"] : 2 }) }), ["shapedefaults"] : ({ ["line"] : ({ ["color"] : "#f2f5fa" }) }), ["annotationdefaults"] : ({ ["arrowcolor"] : "#f2f5fa", ["arrowhead"] : 0, ["arrowwidth"] : 1 }), ["geo"] : ({ ["bgcolor"] : "rgb(17,17,17)", ["landcolor"] : "rgb(17,17,17)", ["subunitcolor"] : "#506784", ["showland"] : true, ["showlakes"] : true, ["lakecolor"] : "rgb(17,17,17)" }), ["title"] : ({ ["x"] : 0.05 }), ["updatemenudefaults"] : ({ ["bgcolor"] : "#506784", ["borderwidth"] : 0 }), ["sliderdefaults"] : ({ ["bgcolor"] : "#C8D4E3", ["borderwidth"] : 1, ["bordercolor"] : "rgb(17,17,17)", ["tickwidth"] : 0 }), ["mapbox"] : ({ ["style"] : "dark" }) }) })) }) }))}},)
  )
}


function Fragment_91c84566eb4e7147fa019d8a9b4bcda5 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.vista_actual_rx_state_?.valueOf?.() === "resultados_busqueda"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Heading_9e255924b8af2f23214d745894472b74,{},),jsx(Heading_cacd0cea4e78884d8d49b3b8c56ae53f,{},),jsx(Plot_c23e2094ca5f43acec0702e0a4d3c707,{},),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{align:"center",color:"mint"},"DATOS"),jsx(Fragment_62c75c6637b0230c784916c83d0ebb29,{},)),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"indigo",size:"5",weight:"bold"},"rendimiento"),jsx(RadixThemesCard,{css:({ ["background"] : "mint", ["color"] : "mint", ["padding"] : "25px" })},jsx(Text_9504ddb8ff6f65b9f1061c10ae65cbdf,{},))),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"indigo"},"volatilidad de la accion(\u00faltimo a\u00f1o)"),jsx(RadixThemesCard,{css:({ ["background"] : "mint", ["color"] : "mint", ["padding"] : "25px" })},jsx(Text_b8ef7c3f4aa276885e1b4b61848476c5,{},))),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesHeading,{color:"indigo"},"an\u00e1lisis de crecimiento futuro"),jsx(Plot_34f74644c56a2fce2c7defeb6b6a6a40,{},))))):(jsx(Fragment,{},))))
  )
}


function Table__body_f900a576642efddf53f5c1491b4abe78 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__portafolio___portafolio___estado.max_rentabilidad_rx_state_ ?? [],((rentabilidad_rx_state_,index_f0020e7d420c73fd196fc3ec71c4080d)=>(jsx(RadixThemesTable.Row,{key:index_f0020e7d420c73fd196fc3ec71c4080d},jsx(RadixThemesTable.Cell,{},rentabilidad_rx_state_?.["nombre"]),jsx(RadixThemesTable.Cell,{},rentabilidad_rx_state_?.["rendimiento"]))))))
  )
}


function Table__body_d2976255bfcf71d11359972392e63d06 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__portafolio___portafolio___estado.min_rentabilidad_rx_state_ ?? [],((no_rentabilidad_rx_state_,index_f0020e7d420c73fd196fc3ec71c4080d)=>(jsx(RadixThemesTable.Row,{key:index_f0020e7d420c73fd196fc3ec71c4080d},jsx(RadixThemesTable.Cell,{},no_rentabilidad_rx_state_?.["nombre"]),jsx(RadixThemesTable.Cell,{},no_rentabilidad_rx_state_?.["rendimiento"]))))))
  )
}


function Fragment_39970db3c89a07c0c79b9bdb64e4aed1 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.vista_actual_rx_state_?.valueOf?.() === "max min"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesHeading,{color:"mint"},"TUS ACCIONES MAS RENTABLES"),jsx(RadixThemesScrollArea,{},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" })},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{},"ticker"),jsx(RadixThemesTable.ColumnHeaderCell,{},"porcentaje de ganancia"))),jsx(Table__body_f900a576642efddf53f5c1491b4abe78,{},))))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesSeparator,{css:({ ["spacing"] : "9", ["color"] : "mint" }),orientation:"vertical",size:"3"},),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesSection,{size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesHeading,{color:"indigo"},"TUS ACCIONES MENOS RENTABLES"),jsx(RadixThemesScrollArea,{},jsx(RadixThemesTable.Root,{css:({ ["width"] : "100%" })},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{},"ticker"),jsx(RadixThemesTable.ColumnHeaderCell,{},"porcentaje de ganancia"))),jsx(Table__body_d2976255bfcf71d11359972392e63d06,{},)))))))):(jsx(Fragment,{},))))
  )
}


function Moment_5fa813aec8b502a0b06b80a320906001 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.dar_contexto", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(Moment,{},)
  )
}


function Debounceinput_c0ec9b10294c0a6386a3437c797d96ed () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_df0669d433fe5a5cd816d7f219a17e78 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.set_mensaje", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const on_key_down_665ca903176c3143fad95bb14c9eeb12 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.enter_bot", ({ ["key"] : _e?.["key"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_df0669d433fe5a5cd816d7f219a17e78,onKeyDown:on_key_down_665ca903176c3143fad95bb14c9eeb12,placeholder:"Hace un resumen de mi portafolio...",size:"3",value:reflex___state____state__portafolio___portafolio___estado.mensaje_rx_state_},)
  )
}


function Button_c893d02a799b66c138a6f06af5d29087 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f517e28aec30e3da465ffb25187bfa17 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.procesar_mensaje", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["transition"] : "all 0.3s ease" }),onClick:on_click_f517e28aec30e3da465ffb25187bfa17},"Enviar")
  )
}


function Scrollarea_80ec1bbcf44e2b165b5d2d00dcd94194 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(RadixThemesScrollArea,{css:({ ["size"] : "5", ["padding"] : "1" })},Array.prototype.map.call(reflex___state____state__portafolio___portafolio___estado.histo_rx_state_ ?? [],((histori_rx_state_,index_dad56307ac9c72463ca4c29549e553a5)=>(jsx(Fragment,{key:index_dad56307ac9c72463ca4c29549e553a5},((histori_rx_state_?.["role"]?.valueOf?.() === "user"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesCard,{css:({ ["background"] : "indigo", ["width"] : "30%" }),size:"2"},jsx(RadixThemesText,{as:"p",weight:"bold"},histori_rx_state_?.["content"])))):(jsx(Fragment,{},jsx(RadixThemesCard,{css:({ ["background"] : "mint" }),size:"5"},jsx(RadixThemesText,{as:"p",css:({ ["letterSpacing"] : "0.05em", ["letterHeight"] : "2" }),weight:"bold"},histori_rx_state_?.["content"]))))))))),jsx(RadixThemesCard,{css:({ ["direction"] : "column", ["align"] : "center" })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%" })},jsx(Debounceinput_c0ec9b10294c0a6386a3437c797d96ed,{},),jsx(Button_c893d02a799b66c138a6f06af5d29087,{},))))
  )
}


function Fragment_2adb1d230ab8b969f543e3843dc82152 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.vista_actual_rx_state_?.valueOf?.() === "infobot"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Moment_5fa813aec8b502a0b06b80a320906001,{},),jsx(RadixThemesHeading,{color:"indigo"},"Asesor Inteligente"),jsx(Scrollarea_80ec1bbcf44e2b165b5d2d00dcd94194,{},)))):(jsx(Fragment,{},))))
  )
}


function Textarea_ed5babf8ef63db03ad616fc960ae6b84 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_7d5ed68c5047b977f11adef4577e96b2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.set_intento_quita", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null }),onChange:on_change_7d5ed68c5047b977f11adef4577e96b2,placeholder:"EJ, tsla"},)
  )
}


function Textarea_a61bc03a2c613d384bcf7c360f19b102 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_f64c164e5e860d58436731262bb00cc0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.set_cantidad_quitar", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const on_key_down_285519a5e76a75c91fd967639740af4b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.enter_quitar", ({ ["key"] : _e?.["key"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null, ["type"] : "number" }),onChange:on_change_f64c164e5e860d58436731262bb00cc0,onKeyDown:on_key_down_285519a5e76a75c91fd967639740af4b,placeholder:"EJ, 890"},)
  )
}


function Button_c261e916cd4eed049be9ce08ea5a3637 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_df4abd379e89bb43d0f50475365fbdb8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.portafolio___portafolio___estado.quitar_accion", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"mint",css:({ ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["align"] : "end", ["padding"] : "5" }),onClick:on_click_df4abd379e89bb43d0f50475365fbdb8,size:"4"},"quitar")
  )
}


function Fragment_04575e414c5cc7dfa4f70963fed394c5 () {
  const reflex___state____state__portafolio___portafolio___estado = useContext(StateContexts.reflex___state____state__portafolio___portafolio___estado)



  return (
    jsx(Fragment,{},((reflex___state____state__portafolio___portafolio___estado.vista_actual_rx_state_?.valueOf?.() === "quitar accion"?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesSection,{css:({ ["spacing"] : "9" }),size:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"indigo"},"accion que desea quitar"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesSeparator,{css:({ ["spacing"] : "9", ["color"] : "mint" }),orientation:"vertical",size:"3"},),jsx(Textarea_ed5babf8ef63db03ad616fc960ae6b84,{},),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesSeparator,{css:({ ["spacing"] : "9", ["color"] : "mint" }),orientation:"vertical",size:"3"},),jsx(RadixThemesHeading,{color:"indigo"},"cantidad que de sea quitar"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Textarea_a61bc03a2c613d384bcf7c360f19b102,{},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Button_c261e916cd4eed049be9ce08ea5a3637,{},)))):(jsx(Fragment,{},))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["backgroundColor"] : "#0f1419", ["minHeight"] : "100vh", ["alignItems"] : "center", ["width"] : "100%", ["pading"] : "1em" }),direction:"column",gap:"9"},jsx(RadixThemesBox,{css:({ ["colorScheme"] : "dark_blue", ["padding"] : "1em", ["width"] : "100%" })},jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "5.25em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"logo.png"},),jsx(RadixThemesHeading,{color:"mint",size:"7",weight:"bold"},"WALLET-PORT")),jsx(RadixThemesCard,{},jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"indigo"},"ganancia:"),jsx(Heading_ab98886e19a1adade08e5c371f56c7ac,{},))),jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"indigo"},"capital total:"),jsx(Heading_2dd91057473e17bf9c01109821f10bfc,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",justify:"end",gap:"5"},jsx(Button_cd02ed9dbb53348e56160e2acbc74346,{},),jsx(RadixThemesDropdownMenu.Root,{},jsx(RadixThemesDropdownMenu.Trigger,{},jsx(RadixThemesButton,{css:({ ["weight"] : "bold", ["&:hover"] : ({ ["cursor"] : "pointer", ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 4px 8px 0 rgba(0,0,0,0.2)" }), ["transition"] : "all 0.3s ease" }),size:"3",variant:"ghost"},jsx(RadixThemesText,{as:"p",color:"indigo",size:"4",weight:"bold"},"opciones"),jsx(LucideChevronDown,{},))),jsx(RadixThemesDropdownMenu.Content,{},jsx(Dropdownmenu__item_5402073e3ab2a44e731f2b91597a5218,{},),jsx(RadixThemesSeparator,{color:"indigo",orientation:"horizontal",size:"4"},),jsx(Dropdownmenu__item_d7ef33bfd834d87b1047294387bf637f,{},))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }),gap:"4"},jsx(Debounceinput_037513a7951bb9d845571ed7f0e2788d,{},),jsx(Button_c19354c7d95cab65816cd9b82e19075c,{},))))),jsx(RadixThemesBox,{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"logo.jpg"},),jsx(RadixThemesHeading,{color:"mint",size:"7",weight:"bold"},"WALLET-PORT")),jsx(RadixThemesCard,{},jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesHeading,{color:"indigo"},"capital total:"),jsx(Heading_2dd91057473e17bf9c01109821f10bfc,{},)))),jsx(RadixThemesDropdownMenu.Root,{css:({ ["justify"] : "end" })},jsx(RadixThemesDropdownMenu.Trigger,{},jsx(LucideMenu,{size:50},)),jsx(RadixThemesDropdownMenu.Content,{},jsx(RadixThemesDropdownMenu.Item,{color:"indigo",css:({ ["size"] : "4", ["weight"] : "medium" })},"Inicio"),jsx(RadixThemesDropdownMenu.Sub,{},jsx(RadixThemesDropdownMenu.SubTrigger,{},""),jsx(RadixThemesDropdownMenu.SubContent,{},jsx(RadixThemesDropdownMenu.Content,{},jsx(Dropdownmenu__item_eeeb1c670302cb092c0de80811e04f52,{},),jsx(Dropdownmenu__item_8ff32b3b706b41847847a88aa512dc83,{},)))),jsx(RadixThemesDropdownMenu.Item,{},"Buscar")))))),jsx(RadixThemesSeparator,{color:"mint",orientation:"vertical",size:"4"},),jsx(Fragment_08947f9304ad127e8c4d79f503005b57,{},),jsx(Fragment_30349efd9dbc6049e4759922835fbc67,{},),jsx(Fragment_91c84566eb4e7147fa019d8a9b4bcda5,{},),jsx(Fragment_39970db3c89a07c0c79b9bdb64e4aed1,{},),jsx(Fragment_2adb1d230ab8b969f543e3843dc82152,{},),jsx(Fragment_04575e414c5cc7dfa4f70963fed394c5,{},))),jsx("title",{},"Portafolio | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}