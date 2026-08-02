import { vt as e, xt as t, yt as n } from "./client-CruOUf1V.js";
import "./index-client-B4rLUVh0.js";
//#endregion
//#region src/lib/core/i18n.ts
var r = {
	en: {
		common: {
			closeGlyph: "×",
			emptyValue: "-",
			notAvailable: "N/A"
		},
		storyBuilder: {
			narration: { button: "Audio narrator" },
			chapters: {
				title: "Chapters",
				empty: "Position viewer, then Add Chapter.",
				edit: "Edit",
				delete: "Delete",
				cancel: "Cancel",
				confirmDelete: "Delete this chapter?"
			},
			actions: {
				add: "+ Add Chapter",
				save: "Save / Export",
				saving: "Saving…",
				saveSuccess: "Saved successfully",
				saveFailed: "Save failed"
			},
			chapter: {
				header: "Chapter Settings",
				manifestLabel: "Manifest URL",
				manifestLoad: "Load / Reload",
				manifestHint: "Load a manifest to start capturing chapters.",
				language: "Language",
				narration: "Narration",
				start: "Start (HH:MM:SS)",
				end: "End (HH:MM:SS)",
				useCurrentTime: "Use current time",
				preview: "Preview segment",
				markInOut: "Mark In / Out (HH:MM:SS)",
				markIn: "Mark In",
				markOut: "Mark Out",
				markHint: "Mark Out must be greater than Mark In for audio / video.",
				annotation: "Annotation ({lang})",
				advance: "Advance",
				advanceHint: "Auto-play will move to the next chapter after the delay below. Leave empty to stay on manual.",
				advanceDelay: "Delay between chapters (seconds)",
				save: "Save",
				saveHint: "Select a chapter to save settings."
			},
			export: {
				title: "Export story JSON",
				copy: "Copy JSON",
				download: "Download .json"
			}
		},
		viewer: {
			status: {
				waiting: "Waiting for a manifest.",
				loading: "Loading manifest...",
				error: "Error loading manifest.",
				loaded: "Manifest loaded."
			},
			brand: {
				title: "Mango IIIF Viewer Demo",
				tag: "Mango Shell"
			},
			manifest: {
				label: "Manifest",
				awaitingId: "Awaiting manifest ID"
			},
			panels: {
				leftLabel: "Left panels",
				rightLabel: "Right panels",
				collection: {
					label: "Collection navigation panel",
					title: "Collection",
					close: "Close collection navigation",
					error: "Unable to load collection navigation",
					messages: {
						viewBy: "View by:",
						hierarchy: "Hierarchy",
						date: "Date",
						loadingDateMetadata: "Loading date metadata…",
						loadNextDates: "Load next {count} dates",
						loadMissingDate: "Load {count} missing date",
						loadMissingDates: "Load {count} missing dates",
						dateNotLoaded: "Date not loaded",
						oneDateNotLoaded: "{count} date not loaded",
						datesNotLoaded: "{count} dates not loaded",
						undated: "Undated",
						expand: "Expand {label}",
						collapse: "Collapse {label}",
						retry: "{error} — select + to retry",
						loadingStructure: "Loading IIIF structure…",
						noResource: "No IIIF collection or manifest loaded.",
						noNavigableItems: "No navigable items.",
						navigationLabel: "IIIF navigation"
					}
				},
				annotations: {
					label: "Annotations panel",
					title: "Annotations",
					export: "Export Annotations",
					close: "Close annotation editor",
					modes: "Annotation modes",
					edit: "Edit",
					create: "Create",
					helpEdit: "Click on an annotation to select and edit it.",
					helpCreate: "Draw on the canvas to create a new annotation.",
					emptyCreate: "Use the toolbar to add rectangles or notes.",
					emptyList: "No annotations on this canvas.",
					fallback: "Annotation",
					keepVisible: "Keep annotations visible",
					keepVisibleDescription: "Show annotations after this panel is closed.",
					editor: {
						createTitle: "Create Annotation",
						detailsTitle: "Annotation Details",
						details: "Details",
						motivation: "Motivation",
						motivations: {
							painting: "painting",
							supplementing: "supplementing",
							contextualizing: "contextualizing",
							contentState: "contentState",
							highlighting: "highlighting",
							commenting: "commenting",
							tagging: "tagging"
						},
						layer: "Layer",
						layersLabel: "Layers",
						label: "Label",
						labelPlaceholder: "Annotation Label",
						text: "Text",
						textPlaceholder: "Add annotation text content...",
						tags: "Tags",
						tagPlaceholder: "Add tag and press Enter",
						addTag: "Add",
						removeTag: "Remove {tag}",
						notes: "Notes",
						privateNotes: "Private Notes",
						notesPlaceholder: "Add private research notes...",
						saveAnnotation: "Save Annotation",
						saveChanges: "Save Changes",
						deleteAnnotation: "Delete Annotation",
						empty: "Select an annotation to inspect details.",
						id: "ID",
						type: "Type",
						searchPlaceholder: "Search annotations",
						pagination: "{current} of {total}",
						showLayer: "Show layer",
						hideLayer: "Hide layer",
						layers: {
							research: "Research Notes",
							transcription: "Transcription",
							highlights: "Highlights",
							mine: "My Annotations"
						},
						tools: {
							select: "Select / Pan",
							rectangle: "Rectangle",
							polygon: "Polygon",
							point: "Point",
							freehand: "Freehand",
							line: "Line"
						}
					}
				},
				contents: {
					label: "Contents panel",
					title: "Contents",
					close: "Close contents",
					tabs: "Contents tabs",
					tocTab: "Chapters",
					transcriptTab: "Transcript",
					tocLabel: "Table of contents",
					transcriptLabel: "Transcript",
					emptyToc: "No table of contents available.",
					emptyTranscript: "No transcript available.",
					fallback: "Untitled entry"
				},
				tools: {
					label: "Tools panel",
					title: "Tools",
					close: "Close tools",
					note: "Image adjustments are available on image canvases.",
					brightness: "Brightness",
					contrast: "Contrast",
					saturation: "Saturation",
					effects: "Effects",
					invert: "Invert",
					grayscale: "Grayscale",
					reset: "Reset"
				},
				search: {
					label: "Search panel",
					title: "Search",
					close: "Close search",
					labelText: "Search annotations",
					placeholder: "Search annotations",
					clear: "Clear",
					hint: "Matches highlight on the canvas.",
					matchCount_one: "{count} match",
					matchCount_other: "{count} matches",
					noMatches: "No matches.",
					empty: "Type to search annotations.",
					hitFallback: "Untitled annotation"
				},
				metadata: {
					label: "Metadata panel",
					title: "Metadata",
					close: "Close metadata",
					attribution: "Attribution",
					license: "License",
					empty: "No manifest metadata available.",
					provider: "Resource provided by"
				},
				layers: {
					label: "Layers panel",
					title: "Layers",
					close: "Close layers"
				}
			},
			stage: {
				label: "Viewer stage",
				loading: "Loading manifest...",
				error: "Unable to load manifest.",
				empty: "No media source resolved for this canvas yet.",
				missingMedia: "This canvas has no media available to display.",
				mediaError: "Something went wrong while displaying this media.",
				nav: {
					label: "Canvas navigation",
					prev: "Previous canvas",
					next: "Next canvas"
				},
				controls: {
					label: "Viewer controls",
					toggleGallery: "Toggle gallery",
					toggleCollection: "Toggle collection navigation",
					toggleContents: "Toggle contents",
					toggleSearch: "Toggle search",
					toggleMetadata: "Toggle metadata",
					toggleAnnotations: "Toggle annotations",
					toggleTools: "Toggle tools",
					showGallery: "Show gallery",
					showCollection: "Show collection navigation",
					showContents: "Show contents",
					hideGallery: "Hide gallery",
					hideCollection: "Hide collection navigation",
					hideContents: "Hide contents",
					showSearch: "Show search",
					hideSearch: "Hide search",
					showInfo: "Show info",
					hideInfo: "Hide info",
					showAnnotations: "Show annotations",
					hideAnnotations: "Hide annotations",
					showTools: "Show tools",
					hideTools: "Hide tools",
					toggleLayers: "Toggle layers",
					showLayers: "Show layers",
					hideLayers: "Hide layers"
				}
			},
			toolbar: {
				label: "Stage controls",
				zoom: "Zoom",
				zoomPercent: "Zoom percent",
				zoomOut: "Zoom out",
				zoomIn: "Zoom in",
				canvasNumber: "Canvas number",
				home: "Home",
				rotateLeft: "Rotate left",
				rotateRight: "Rotate right",
				start: "Start",
				stop: "Stop",
				pause: "Pause",
				forward: "Fast forward 10 seconds",
				rewind: "Rewind 10 seconds",
				media: "Media",
				mediaSelect: "Select media source"
			},
			gallery: {
				label: "Thumbnail gallery",
				title: "Gallery",
				hide: "Hide gallery",
				empty: "No canvases available.",
				unavailable: "Media unavailable",
				canvasAlt: "Canvas {index}"
			},
			dock: {
				gallery: "G",
				collection: "C",
				contents: "C",
				search: "S",
				info: "I",
				annotations: "A",
				tools: "T",
				layers: "L"
			}
		},
		workspace: {
			settings: "Settings",
			layout: "Layout",
			theme: "Theme",
			themeDark: "Dark",
			themeLight: "Light",
			themeSepia: "Sepia",
			themeMidnight: "Midnight",
			themeRingo: "Ringo",
			closeSettings: "Close settings",
			showSettings: "Show settings",
			hideSettings: "Hide settings",
			toggleSettings: "Toggle settings",
			language: "Language",
			viewMode: "Page Layout",
			viewModeSingle: "Single",
			viewModePaged: "Side by Side",
			viewModeContinuous: "Continuous Scroll",
			viewModeGallery: "Gallery",
			activeViewport: "Active Viewport",
			activeViewportHint: "Manifest context follows active window focus.",
			canvasPosition: "Canvas {current} of {total}",
			searchHint: "Search panel is bound to active window manifest.",
			annotationsHint: "Annotation context is bound to active window.",
			resizeRows: "Resize workspace rows",
			resizeColumns: "Resize workspace columns",
			unavailableMultiView: "Unavailable in multi-view",
			details: "Workspace details",
			eyebrow: "Workspace",
			selectedWindow: "Selected window",
			none: "None",
			singleViewOnly: "Metadata, search and annotations are available in single-view mode.",
			manifest: "Manifest",
			pageLayout: {
				group: "Page layout",
				singleAria: "Single page layout",
				sideBySideAria: "Side by side page layout",
				continuousAria: "Continuous scroll page layout",
				galleryAria: "Gallery page layout"
			},
			window: {
				canvasNavigation: "Canvas navigation",
				pageNumber: "Page number",
				replaceManifest: "Replace manifest in this window",
				previousCanvas: "Previous canvas",
				nextCanvas: "Next canvas"
			},
			emptySlot: {
				dropZone: "Empty workspace window",
				dragOrPaste: "Drag a manifest here or paste its URL",
				empty: "Empty",
				placeholder: "Manifest URL",
				load: "Load manifest",
				chooseLibrary: "Choose from manifest library"
			},
			compare: {
				title: "Compare",
				close: "Close compare",
				description: "Choose how the comparison views are arranged.",
				group: "Comparison layout",
				single: "Single view",
				singleAria: "Single view layout, 1 by 1",
				singleAnnouncement: "Single view layout selected",
				sideBySide: "Side by side",
				sideBySideAria: "Side by side layout, 1 by 2",
				sideBySideAnnouncement: "Side by side layout selected",
				stacked: "Stacked",
				stackedAria: "Stacked layout, 2 by 1",
				stackedAnnouncement: "Stacked layout selected",
				oneByTwo: "One and two",
				oneByTwoAria: "One-and-two layout, one large view and two stacked views",
				oneByTwoAnnouncement: "One-and-two layout selected. Three views are open",
				grid: "Grid",
				gridAria: "Grid layout, 2 by 2",
				gridAnnouncement: "Grid layout selected"
			},
			manifestManager: {
				ariaLabel: "IIIF manifest manager",
				eyebrow: "IIIF workspace",
				title: "Load a manifest",
				close: "Close manifest manager",
				url: "Manifest URL",
				urlPlaceholder: "https://example.org/iiif/manifest.json",
				targetWindow: "Target window",
				window: "Window {number}",
				active: "active",
				loading: "Loading…",
				loadSelected: "Load into selected window",
				load: "Load manifest",
				replaceAll: "Replace all manifests",
				library: "Manifest library",
				resourceCount: "{count} resources",
				loadError: "Could not load manifest: {error}",
				remove: "Remove from library",
				removeAria: "Remove {label} from manifest library",
				addTitle: "Add manifest URL",
				addDescription: "Paste a IIIF manifest URL to open it in the viewer.",
				addUrl: "Add manifest URL",
				search: "Search manifests",
				searchPlaceholder: "Search manifests, collections, or keywords…",
				filterAria: "Filter manifests",
				all: "All",
				recent: "Recent",
				favourites: "Favourites",
				source: "Manifest source",
				allSources: "All sources",
				unknownSource: "Unknown source",
				pasteHint: "Paste a IIIF manifest URL or choose from your",
				yourLibrary: "library.",
				itemCount: "{count} items",
				openAria: "Load {label}",
				favouriteAria: "Toggle {label} as a favourite",
				noResults: "No manifests match this filter.",
				whatIsIiif: "What is a IIIF manifest?"
			},
			sidebar: {
				navigation: "Viewer navigation",
				browse: "Browse",
				gallery: "Gallery",
				metadata: "Metadata",
				search: "Search",
				annotations: "Annotations",
				collections: "Collections",
				transcription: "Transcription",
				explore: "Explore",
				imageLayers: "Image layers",
				tools: "Tools",
				viewSettings: "View settings",
				compare: "Compare",
				download: "Download",
				share: "Share",
				cite: "Cite",
				iiifManifests: "IIIF manifests",
				collapse: "Collapse sidebar",
				workspaceTools: "Workspace tools",
				manageIiif: "Manage IIIF manifests"
			}
		},
		media: { type: {
			image: "Image",
			video: "Video",
			audio: "Audio",
			pdf: "PDF",
			model: "3D"
		} },
		renderers: {
			audio: {
				noSource: "No audio source.",
				accompanyingLabel: "Accompanying image",
				cuesTitle: "Cue points",
				cueFallback: "Cue"
			},
			video: {
				noSource: "No video source.",
				cuesTitle: "Cues",
				cueFallback: "Annotation"
			},
			image: { noSource: "No image source available." },
			pdf: {
				noSource: "No PDF source.",
				prev: "Prev",
				next: "Next",
				prevAria: "Previous page",
				nextAria: "Next page",
				zoomOut: "Zoom -",
				zoomIn: "Zoom +",
				zoomOutAria: "Zoom out",
				zoomInAria: "Zoom in",
				status: "Page {pageNumber} / {pageCount}"
			},
			model: {
				label: "3D viewer",
				noSource: "No 3D source."
			},
			osd: { label: "Image viewer" }
		},
		plugins: {
			hello: {
				label: "Hello panel",
				noManifest: "No manifest",
				nextCanvas: "Next canvas"
			},
			annotation: {
				label: "Add annotation",
				note: "Drop a quick annotation on the current view.",
				button: "Add annotation",
				added: "Added via plugin"
			}
		},
		warnings: {
			invalidConfig: "Invalid config JSON on <mango-viewer>.",
			pluginMissingId: "ViewerPlugin must include an id."
		}
	},
	es: {
		common: {
			closeGlyph: "×",
			emptyValue: "-",
			notAvailable: "N/D"
		},
		storyBuilder: {
			narration: { button: "Narrador de audio" },
			chapters: {
				title: "Capítulos",
				empty: "Posicione el visor y luego añada un capítulo.",
				edit: "Editar",
				delete: "Eliminar",
				cancel: "Cancelar",
				confirmDelete: "¿Eliminar este capítulo?"
			},
			actions: {
				add: "+ Añadir capítulo",
				save: "Guardar / Exportar",
				saving: "Guardando…",
				saveSuccess: "Guardado correctamente",
				saveFailed: "Error al guardar"
			},
			chapter: {
				header: "Ajustes de capítulo",
				manifestLabel: "URL del manifiesto",
				manifestLoad: "Cargar / Recargar",
				manifestHint: "Cargue un manifiesto para empezar a capturar capítulos.",
				language: "Idioma",
				narration: "Narración",
				start: "Inicio (HH:MM:SS)",
				end: "Fin (HH:MM:SS)",
				useCurrentTime: "Usar tiempo actual",
				preview: "Previsualizar segmento",
				markInOut: "Marcar entrada / salida (HH:MM:SS)",
				markIn: "Marcar entrada",
				markOut: "Marcar salida",
				markHint: "La salida debe ser mayor que la entrada para audio / vídeo.",
				annotation: "Anotación ({lang})",
				advance: "Avance",
				advanceHint: "La reproducción automática pasa al siguiente capítulo tras la demora indicada. Dejar vacío mantiene el modo manual.",
				advanceDelay: "Demora entre capítulos (segundos)",
				save: "Guardar",
				saveHint: "Seleccione un capítulo para guardar ajustes."
			},
			export: {
				title: "Exportar JSON de la historia",
				copy: "Copiar JSON",
				download: "Descargar .json"
			}
		},
		viewer: {
			status: {
				waiting: "Esperando un manifiesto.",
				loading: "Cargando manifiesto...",
				error: "Error al cargar el manifiesto.",
				loaded: "Manifiesto cargado."
			},
			brand: {
				title: "Demo del visor IIIF Mango",
				tag: "Mango Shell"
			},
			manifest: {
				label: "Manifiesto",
				awaitingId: "Esperando ID del manifiesto"
			},
			panels: {
				leftLabel: "Paneles izquierdos",
				rightLabel: "Paneles derechos",
				collection: {
					label: "Panel de navegación de colecciones",
					title: "Colección",
					close: "Cerrar navegación de colecciones",
					error: "No se pudo cargar la navegación de colecciones",
					messages: {
						viewBy: "Ver por:",
						hierarchy: "Jerarquía",
						date: "Fecha",
						loadingDateMetadata: "Cargando metadatos de fechas…",
						loadNextDates: "Cargar las siguientes {count} fechas",
						loadMissingDate: "Cargar {count} fecha pendiente",
						loadMissingDates: "Cargar {count} fechas pendientes",
						dateNotLoaded: "Fecha no cargada",
						oneDateNotLoaded: "{count} fecha no cargada",
						datesNotLoaded: "{count} fechas no cargadas",
						undated: "Sin fecha",
						expand: "Expandir {label}",
						collapse: "Contraer {label}",
						retry: "{error} — seleccione + para reintentar",
						loadingStructure: "Cargando estructura IIIF…",
						noResource: "No se ha cargado ninguna colección ni manifiesto IIIF.",
						noNavigableItems: "No hay elementos navegables.",
						navigationLabel: "Navegación IIIF"
					}
				},
				annotations: {
					label: "Panel de anotaciones",
					title: "Editor de anotaciones",
					export: "Exportar anotaciones",
					close: "Cerrar editor de anotaciones",
					modes: "Modos de anotación",
					edit: "Editar",
					create: "Crear",
					helpEdit: "Haz clic en una anotación para seleccionarla y editarla.",
					helpCreate: "Dibuja en el lienzo para crear una nueva anotación.",
					emptyCreate: "Usa la barra de herramientas para agregar rectángulos o notas.",
					emptyList: "No hay anotaciones en este lienzo.",
					fallback: "Anotación",
					keepVisible: "Mantener las anotaciones visibles",
					keepVisibleDescription: "Mostrar las anotaciones después de cerrar este panel.",
					editor: {
						createTitle: "Crear anotación",
						detailsTitle: "Detalles de la anotación",
						details: "Detalles",
						motivation: "Motivación",
						motivations: {
							painting: "pintura (painting)",
							supplementing: "suplemento (supplementing)",
							contextualizing: "contextualización (contextualizing)",
							contentState: "estado de contenido (contentState)",
							highlighting: "resaltado (highlighting)",
							commenting: "comentario (commenting)",
							tagging: "etiquetado (tagging)"
						},
						layer: "Capa",
						layersLabel: "Capas",
						label: "Etiqueta",
						labelPlaceholder: "Etiqueta de anotación",
						text: "Texto",
						textPlaceholder: "Añadir texto de anotación...",
						tags: "Etiquetas",
						tagPlaceholder: "Añadir etiqueta y pulsar Enter",
						addTag: "Añadir",
						removeTag: "Eliminar {tag}",
						notes: "Notas",
						privateNotes: "Notas privadas",
						notesPlaceholder: "Añadir notas privadas de investigación...",
						saveAnnotation: "Guardar anotación",
						saveChanges: "Guardar cambios",
						deleteAnnotation: "Eliminar anotación",
						empty: "Seleccione una anotación para ver los detalles.",
						id: "ID",
						type: "Tipo",
						searchPlaceholder: "Buscar anotaciones",
						pagination: "{current} de {total}",
						showLayer: "Mostrar capa",
						hideLayer: "Ocultar capa",
						layers: {
							research: "Notas de investigación",
							transcription: "Transcripción",
							highlights: "Destacados",
							mine: "Mis anotaciones"
						},
						tools: {
							select: "Seleccionar / Desplazar",
							rectangle: "Rectángulo",
							polygon: "Polígono",
							point: "Punto",
							freehand: "Mano alzada",
							line: "Línea"
						}
					}
				},
				contents: {
					label: "Panel de contenidos",
					title: "Contenidos",
					close: "Cerrar contenidos",
					tabs: "Pestañas de contenidos",
					tocTab: "Capítulos",
					transcriptTab: "Transcripción",
					tocLabel: "Tabla de contenidos",
					transcriptLabel: "Transcripción",
					emptyToc: "No hay tabla de contenidos disponible.",
					emptyTranscript: "No hay transcripción disponible.",
					fallback: "Entrada sin título"
				},
				tools: {
					label: "Panel de herramientas",
					title: "Herramientas",
					close: "Cerrar herramientas",
					note: "Los ajustes de imagen están disponibles en lienzos de imagen.",
					brightness: "Brillo",
					contrast: "Contraste",
					saturation: "Saturación",
					effects: "Efectos",
					invert: "Invertir",
					grayscale: "Escala de grises",
					reset: "Restablecer"
				},
				search: {
					label: "Panel de búsqueda",
					title: "Buscar",
					close: "Cerrar búsqueda",
					labelText: "Buscar anotaciones",
					placeholder: "Buscar anotaciones",
					clear: "Limpiar",
					hint: "Las coincidencias resaltan en el lienzo.",
					matchCount_one: "{count} coincidencia",
					matchCount_other: "{count} coincidencias",
					noMatches: "Sin coincidencias.",
					empty: "Escribe para buscar anotaciones.",
					hitFallback: "Anotación sin título"
				},
				metadata: {
					label: "Panel de metadatos",
					title: "Metadatos",
					close: "Cerrar metadatos",
					attribution: "Atribución",
					license: "Licencia",
					empty: "No hay metadatos del manifiesto.",
					provider: "Recurso proporcionado por"
				},
				layers: {
					label: "Panel de capas",
					title: "Capas",
					close: "Cerrar capas"
				}
			},
			stage: {
				label: "Escenario del visor",
				loading: "Cargando manifiesto...",
				error: "No se pudo cargar el manifiesto.",
				empty: "No se resolvió una fuente multimedia para este lienzo.",
				missingMedia: "Este lienzo no tiene contenido multimedia disponible.",
				mediaError: "Se produjo un error al mostrar este contenido multimedia.",
				nav: {
					label: "Navegación de lienzos",
					prev: "Lienzo anterior",
					next: "Siguiente lienzo"
				},
				controls: {
					label: "Controles del visor",
					toggleGallery: "Alternar galería",
					toggleCollection: "Alternar navegación de colecciones",
					toggleContents: "Alternar contenidos",
					toggleSearch: "Alternar búsqueda",
					toggleMetadata: "Alternar metadatos",
					toggleAnnotations: "Alternar anotaciones",
					toggleTools: "Alternar herramientas",
					showGallery: "Mostrar galería",
					showCollection: "Mostrar navegación de colecciones",
					showContents: "Mostrar contenidos",
					hideGallery: "Ocultar galería",
					hideCollection: "Ocultar navegación de colecciones",
					hideContents: "Ocultar contenidos",
					showSearch: "Mostrar búsqueda",
					hideSearch: "Ocultar búsqueda",
					showInfo: "Mostrar información",
					hideInfo: "Ocultar información",
					showAnnotations: "Mostrar anotaciones",
					hideAnnotations: "Ocultar anotaciones",
					showTools: "Mostrar herramientas",
					hideTools: "Ocultar herramientas",
					toggleLayers: "Alternar capas",
					showLayers: "Mostrar capas",
					hideLayers: "Ocultar capas"
				}
			},
			toolbar: {
				label: "Controles del escenario",
				zoom: "Zoom",
				zoomPercent: "Porcentaje de zoom",
				zoomOut: "Alejar",
				zoomIn: "Acercar",
				canvasNumber: "Número de lienzo",
				home: "Inicio",
				rotateLeft: "Girar a la izquierda",
				rotateRight: "Girar a la derecha",
				start: "Iniciar",
				stop: "Detener",
				pause: "Pausar",
				forward: "Avanzar 10 segundos",
				rewind: "Retroceder 10 segundos",
				media: "Medios",
				mediaSelect: "Seleccionar fuente multimedia"
			},
			gallery: {
				label: "Galería de miniaturas",
				title: "Galería",
				hide: "Ocultar galería",
				empty: "No hay lienzos disponibles.",
				unavailable: "Contenido multimedia no disponible",
				canvasAlt: "Lienzo {index}"
			},
			dock: {
				gallery: "G",
				collection: "C",
				contents: "C",
				search: "B",
				info: "I",
				annotations: "A",
				tools: "T",
				layers: "L"
			}
		},
		workspace: {
			settings: "Configuración",
			layout: "Diseño",
			theme: "Tema",
			themeDark: "Oscuro",
			themeLight: "Claro",
			themeSepia: "Sepia",
			themeMidnight: "Medianoche",
			themeRingo: "Ringo",
			closeSettings: "Cerrar configuración",
			showSettings: "Mostrar configuración",
			hideSettings: "Ocultar configuración",
			toggleSettings: "Alternar configuración",
			language: "Idioma",
			viewMode: "Diseño de página",
			viewModeSingle: "Única",
			viewModePaged: "Doble página",
			viewModeContinuous: "Desplazamiento continuo",
			viewModeGallery: "Galería",
			activeViewport: "Vista activa",
			activeViewportHint: "El contexto del manifiesto sigue la ventana activa.",
			canvasPosition: "Lienzo {current} de {total}",
			searchHint: "El panel de búsqueda está vinculado al manifiesto de la ventana activa.",
			annotationsHint: "El contexto de anotaciones está vinculado a la ventana activa.",
			resizeRows: "Cambiar el tamaño de las filas del espacio de trabajo",
			resizeColumns: "Cambiar el tamaño de las columnas del espacio de trabajo",
			unavailableMultiView: "No disponible en vista múltiple",
			details: "Detalles del espacio de trabajo",
			eyebrow: "Espacio de trabajo",
			selectedWindow: "Ventana seleccionada",
			none: "Ninguna",
			singleViewOnly: "Los metadatos, la búsqueda y las anotaciones están disponibles en la vista única.",
			manifest: "Manifiesto",
			pageLayout: {
				group: "Diseño de página",
				singleAria: "Diseño de página única",
				sideBySideAria: "Diseño de páginas en paralelo",
				continuousAria: "Diseño de desplazamiento continuo",
				galleryAria: "Diseño de galería"
			},
			window: {
				canvasNavigation: "Navegación por lienzos",
				pageNumber: "Número de página",
				replaceManifest: "Reemplazar el manifiesto de esta ventana",
				previousCanvas: "Lienzo anterior",
				nextCanvas: "Lienzo siguiente"
			},
			emptySlot: {
				dropZone: "Ventana vacía",
				dragOrPaste: "Arrastra un manifiesto aquí o pega su URL",
				empty: "Vacía",
				placeholder: "URL del manifiesto",
				load: "Cargar manifiesto",
				chooseLibrary: "Elegir de la biblioteca de manifiestos"
			},
			compare: {
				title: "Comparar",
				close: "Cerrar comparación",
				description: "Elige cómo se organizan las vistas de comparación.",
				group: "Diseño de comparación",
				single: "Vista única",
				singleAria: "Diseño de vista única, 1 por 1",
				singleAnnouncement: "Diseño de vista única seleccionado",
				sideBySide: "En paralelo",
				sideBySideAria: "Diseño en paralelo, 1 por 2",
				sideBySideAnnouncement: "Diseño en paralelo seleccionado",
				stacked: "Apiladas",
				stackedAria: "Diseño apilado, 2 por 1",
				stackedAnnouncement: "Diseño apilado seleccionado",
				oneByTwo: "Uno y dos",
				oneByTwoAria: "Diseño de uno y dos, una vista grande y dos vistas apiladas",
				oneByTwoAnnouncement: "Diseño de uno y dos seleccionado. Hay tres vistas abiertas",
				grid: "Cuadrícula",
				gridAria: "Diseño de cuadrícula, 2 por 2",
				gridAnnouncement: "Diseño de cuadrícula seleccionado"
			},
			manifestManager: {
				ariaLabel: "Gestor de manifiestos IIIF",
				eyebrow: "Espacio de trabajo IIIF",
				title: "Cargar un manifiesto",
				close: "Cerrar el gestor de manifiestos",
				url: "URL del manifiesto",
				urlPlaceholder: "https://ejemplo.org/iiif/manifest.json",
				targetWindow: "Ventana de destino",
				window: "Ventana {number}",
				active: "activa",
				loading: "Cargando…",
				loadSelected: "Cargar en la ventana seleccionada",
				load: "Cargar manifiesto",
				replaceAll: "Reemplazar todos los manifiestos",
				library: "Biblioteca",
				resourceCount: "{count} recursos",
				loadError: "No se pudo cargar el manifiesto: {error}",
				remove: "Eliminar de la biblioteca",
				removeAria: "Eliminar {label} de la biblioteca de manifiestos",
				addTitle: "Añadir URL de manifiesto",
				addDescription: "Pega la URL de un manifiesto IIIF para abrirlo en el visor.",
				addUrl: "Añadir URL de manifiesto",
				search: "Buscar manifiestos",
				searchPlaceholder: "Buscar manifiestos, colecciones o palabras clave…",
				filterAria: "Filtrar manifiestos",
				all: "Todos",
				recent: "Recientes",
				favourites: "Favoritos",
				source: "Fuente del manifiesto",
				allSources: "Todas las fuentes",
				unknownSource: "Fuente desconocida",
				pasteHint: "Pega la URL de un manifiesto IIIF o elige de tu",
				yourLibrary: "biblioteca.",
				itemCount: "{count} elementos",
				openAria: "Cargar {label}",
				favouriteAria: "Cambiar {label} como favorito",
				noResults: "Ningún manifiesto coincide con este filtro.",
				whatIsIiif: "¿Qué es un manifiesto IIIF?"
			},
			sidebar: {
				navigation: "Navegación del visor",
				browse: "Explorar",
				gallery: "Galería",
				metadata: "Metadatos",
				search: "Buscar",
				annotations: "Anotaciones",
				collections: "Colecciones",
				transcription: "Transcripción",
				explore: "Explorar",
				imageLayers: "Capas de imagen",
				tools: "Herramientas",
				viewSettings: "Configuración de vista",
				compare: "Comparar",
				download: "Descargar",
				share: "Compartir",
				cite: "Citar",
				iiifManifests: "Manifiestos IIIF",
				collapse: "Contraer barra lateral",
				workspaceTools: "Herramientas del espacio de trabajo",
				manageIiif: "Gestionar manifiestos IIIF"
			}
		},
		media: { type: {
			image: "Imagen",
			video: "Video",
			audio: "Audio",
			pdf: "PDF",
			model: "3D"
		} },
		renderers: {
			audio: {
				noSource: "Sin fuente de audio.",
				accompanyingLabel: "Imagen acompañante",
				cuesTitle: "Puntos de cue",
				cueFallback: "Cue"
			},
			video: {
				noSource: "Sin fuente de video.",
				cuesTitle: "Cues",
				cueFallback: "Anotación"
			},
			image: { noSource: "No hay fuente de imagen disponible." },
			pdf: {
				noSource: "Sin fuente PDF.",
				prev: "Anterior",
				next: "Siguiente",
				prevAria: "Página anterior",
				nextAria: "Página siguiente",
				zoomOut: "Zoom -",
				zoomIn: "Zoom +",
				zoomOutAria: "Alejar",
				zoomInAria: "Acercar",
				status: "Página {pageNumber} / {pageCount}"
			},
			model: {
				label: "Visor 3D",
				noSource: "Sin fuente 3D."
			},
			osd: { label: "Visor de imagen" }
		},
		plugins: {
			hello: {
				label: "Panel de saludo",
				noManifest: "Sin manifiesto",
				nextCanvas: "Siguiente lienzo"
			},
			annotation: {
				label: "Agregar anotación",
				note: "Agrega una anotación rápida en la vista actual.",
				button: "Agregar anotación",
				added: "Agregado vía plugin"
			}
		},
		warnings: {
			invalidConfig: "JSON de configuración inválido en <mango-viewer>.",
			pluginMissingId: "ViewerPlugin debe incluir un id."
		}
	},
	cy: {
		common: {
			closeGlyph: "×",
			emptyValue: "-",
			notAvailable: "D/A"
		},
		storyBuilder: {
			narration: { button: "Adroddwr sain" },
			chapters: {
				title: "Penodau",
				empty: "Lleolwch y gwyliwr, yna Ychwanegwch Bennod.",
				edit: "Golygu",
				delete: "Dileu",
				cancel: "Canslo",
				confirmDelete: "Dileu'r bennod hon?"
			},
			actions: {
				add: "+ Ychwanegu Pennod",
				save: "Cadw / Allforio",
				saving: "Wrthi'n cadw...",
				saveSuccess: "Wedi cadw'n llwyddiannus",
				saveFailed: "Methwyd â chadw"
			},
			chapter: {
				header: "Gosodiadau Pennod",
				manifestLabel: "URL y Maniffest",
				manifestLoad: "Llwytho / Aillwytho",
				manifestHint: "Llwythwch faniffest i ddechrau dal penodau.",
				language: "Iaith",
				narration: "Adroddiant",
				start: "Dechrau (HH:MM:SS)",
				end: "Diwedd (HH:MM:SS)",
				useCurrentTime: "Defnyddio'r amser cyfredol",
				preview: "Rhagolwg segment",
				markInOut: "Nodi Dechrau / Diwedd (HH:MM:SS)",
				markIn: "Nodi Dechrau",
				markOut: "Nodi Diwedd",
				markHint: "Rhaid i'r Nod Diwedd fod yn fwy na'r Nod Dechrau ar gyfer sain / fideo.",
				annotation: "Anodiad ({lang})",
				advance: "Symud ymlaen",
				advanceHint: "Bydd chwarae awtomatig yn symud i'r bennod nesaf ar ôl yr oedi isod. Gadewch yn wag i aros ar ddull llaw.",
				advanceDelay: "Oedi rhwng penodau (eiliadau)",
				save: "Cadw",
				saveHint: "Dewiswch bennod i gadw gosodiadau."
			},
			export: {
				title: "Allforio JSON y stori",
				copy: "Copïo JSON",
				download: "Lawrlwytho .json"
			}
		},
		viewer: {
			status: {
				waiting: "Yn aros am faniffest.",
				loading: "Wrthi'n llwytho maniffest...",
				error: "Gwall wrth lwytho maniffest.",
				loaded: "Wedi llwytho maniffest."
			},
			brand: {
				title: "Demo Gwyliwr IIIF Mango",
				tag: "Mango Shell"
			},
			manifest: {
				label: "Maniffest",
				awaitingId: "Yn aros am ID y maniffest"
			},
			panels: {
				leftLabel: "Paneli chwith",
				rightLabel: "Paneli dde",
				collection: {
					label: "Panel llywio casgliad",
					title: "Casgliad",
					close: "Cau llywio casgliad",
					error: "Methu llwytho llywio casgliad",
					messages: {
						viewBy: "Gweld yn ôl:",
						hierarchy: "Hierarchaeth",
						date: "Dyddiad",
						loadingDateMetadata: "Wrthi'n llwytho metadata dyddiad…",
						loadNextDates: "Llwytho'r {count} dyddiad nesaf",
						loadMissingDate: "Llwytho {count} dyddiad coll",
						loadMissingDates: "Llwytho {count} dyddiad coll",
						dateNotLoaded: "Dyddiad heb ei lwytho",
						oneDateNotLoaded: "{count} dyddiad heb ei lwytho",
						datesNotLoaded: "{count} dyddiad heb eu llwytho",
						undated: "Heb ddyddiad",
						expand: "Ehangu {label}",
						collapse: "Cwympo {label}",
						retry: "{error} — dewiswch + i roi cynnig arall",
						loadingStructure: "Wrthi'n llwytho strwythur IIIF…",
						noResource: "Dim casgliad na maniffest IIIF wedi'i lwytho.",
						noNavigableItems: "Dim eitemau llywio.",
						navigationLabel: "Llywio IIIF"
					}
				},
				annotations: {
					label: "Panel anodiadau",
					title: "Anodiadau",
					export: "Allforio Anodiadau",
					close: "Cau golygydd anodiadau",
					modes: "Dulliau anodi",
					edit: "Golygu",
					create: "Creu",
					helpEdit: "Cliciwch ar anodiad i'w ddewis a'i olygu.",
					helpCreate: "Arlunio ar y cynfas i creu anodiad newydd.",
					emptyCreate: "Defnyddiwch y far offer i ychwanegu petryalau neu nodiadau.",
					emptyList: "Dim anodiadau ar y cynfas hwn.",
					fallback: "Anodiad",
					keepVisible: "Cadw anodiadau'n weladwy",
					keepVisibleDescription: "Dangos anodiadau ar ôl cau'r panel hwn.",
					editor: {
						createTitle: "Creu Anodiad",
						detailsTitle: "Manylion Anodiad",
						details: "Manylion",
						motivation: "Ysgogiad",
						motivations: {
							painting: "peintio (painting)",
							supplementing: "ategu (supplementing)",
							contextualizing: "cyd-destunoli (contextualizing)",
							contentState: "cyflwr cynnwys (contentState)",
							highlighting: "amlygu (highlighting)",
							commenting: "sylwi (commenting)",
							tagging: "tagio (tagging)"
						},
						layer: "Haen",
						layersLabel: "Haenau",
						label: "Label",
						labelPlaceholder: "Label Anodiad",
						text: "Testun",
						textPlaceholder: "Ychwanegwch gynnwys testun anodiad...",
						tags: "Tagiau",
						tagPlaceholder: "Ychwanegwch dag a gwasgwch Enter",
						addTag: "Ychwanegu",
						removeTag: "Tynnu {tag}",
						notes: "Nodiadau",
						privateNotes: "Nodiadau Preifat",
						notesPlaceholder: "Ychwanegwch nodiadau ymchwil preifat...",
						saveAnnotation: "Cadw Anodiad",
						saveChanges: "Cadw Newidiadau",
						deleteAnnotation: "Dileu Anodiad",
						empty: "Dewiswch anodiad i archwilio manylion.",
						id: "ID",
						type: "Math",
						searchPlaceholder: "Chwilio anodiadau",
						pagination: "{current} o {total}",
						showLayer: "Dangos haen",
						hideLayer: "Cuddio haen",
						layers: {
							research: "Nodiadau Ymchwil",
							transcription: "Trawsgrifiad",
							highlights: "Amlygiadau",
							mine: "Fy Anodiadau"
						},
						tools: {
							select: "Dewis / Padell",
							rectangle: "Petryal",
							polygon: "Polygon",
							point: "Pwynt",
							freehand: "Llaw rydd",
							line: "Llinell"
						}
					}
				},
				contents: {
					label: "Panel cynnwys",
					title: "Cynnwys",
					close: "Cau cynnwys",
					tabs: "Tabiau cynnwys",
					tocTab: "Penodau",
					transcriptTab: "Trawsgrifiad",
					tocLabel: "Rhestr cynnwys",
					transcriptLabel: "Trawsgrifiad",
					emptyToc: "Dim rhestr cynnwys ar gael.",
					emptyTranscript: "Dim trawsgrifiad ar gael.",
					fallback: "Cofnod heb deitl"
				},
				tools: {
					label: "Panel offer",
					title: "Offer",
					close: "Cau offer",
					note: "Mae addasiadau delwedd ar gael ar gynfasau delwedd.",
					brightness: "Disgleirdeb",
					contrast: "Cyferbyniad",
					saturation: "Dirlawnder",
					effects: "Effeithiau",
					invert: "Gwrthdroi",
					grayscale: "Graddlwyd",
					reset: "Ailosod"
				},
				search: {
					label: "Panel chwilio",
					title: "Chwilio",
					close: "Cau chwilio",
					labelText: "Chwilio anodiadau",
					placeholder: "Chwilio anodiadau",
					clear: "Clirio",
					hint: "Mae cyfatebiaethau'n amlygu ar y cynfas.",
					matchCount_one: "{count} cyfatebiaeth",
					matchCount_other: "{count} cyfatebiaeth",
					noMatches: "Dim cyfatebiaethau.",
					empty: "Teipiwch i chwilio anodiadau.",
					hitFallback: "Anodiad heb deitl"
				},
				metadata: {
					label: "Panel metadata",
					title: "Metadata",
					close: "Cau metadata",
					attribution: "Priodoliad",
					license: "Trwydded",
					empty: "Dim metadata maniffest ar gael.",
					provider: "Adnodd wedi'i ddarparu gan"
				},
				layers: {
					label: "Panel haenau",
					title: "Haenau",
					close: "Cau haenau"
				}
			},
			stage: {
				label: "Llwyfan y gwyliwr",
				loading: "Wrthi'n llwytho maniffest...",
				error: "Methu llwytho maniffest.",
				empty: "Dim ffynhonnell cyfryngau wedi'i datrys ar gyfer y cynfas hwn eto.",
				missingMedia: "Nid oes cyfryngau ar gael i'w dangos ar gyfer y cynfas hwn.",
				mediaError: "Aeth rhywbeth o'i le wrth ddangos y cyfryngau hyn.",
				nav: {
					label: "Llywio cynfas",
					prev: "Cynfas blaenorol",
					next: "Cynfas nesaf"
				},
				controls: {
					label: "Rheolyddion y gwyliwr",
					toggleGallery: "Togl galeri",
					toggleCollection: "Togl llywio casgliad",
					toggleContents: "Togl cynnwys",
					toggleSearch: "Togl chwilio",
					toggleMetadata: "Togl metadata",
					toggleAnnotations: "Togl anodiadau",
					toggleTools: "Togl offer",
					showGallery: "Dangos galeri",
					showCollection: "Dangos llywio casgliad",
					showContents: "Dangos cynnwys",
					hideGallery: "Cuddio galeri",
					hideCollection: "Cuddio llywio casgliad",
					hideContents: "Cuddio cynnwys",
					showSearch: "Dangos chwilio",
					hideSearch: "Cuddio chwilio",
					showInfo: "Dangos gwybodaeth",
					hideInfo: "Cuddio gwybodaeth",
					showAnnotations: "Dangos anodiadau",
					hideAnnotations: "Cuddio anodiadau",
					showTools: "Dangos offer",
					hideTools: "Cuddio offer",
					toggleLayers: "Togl haenau",
					showLayers: "Dangos haenau",
					hideLayers: "Cuddio haenau"
				}
			},
			toolbar: {
				label: "Rheolyddion y llwyfan",
				zoom: "Chwyddo",
				zoomPercent: "Canran chwyddo",
				zoomOut: "Chwyddo allan",
				zoomIn: "Chwyddo mewn",
				canvasNumber: "Rhif cynfas",
				home: "Hafan",
				rotateLeft: "Cylchdroi i'r chwith",
				rotateRight: "Cylchdroi i'r dde",
				start: "Dechrau",
				stop: "Stopio",
				pause: "Oedi",
				forward: "Chwarae ymlaen 10 eiliad",
				rewind: "Ailddirwyn 10 eiliad",
				media: "Cyfryngau",
				mediaSelect: "Dewis ffynhonnell cyfryngau"
			},
			gallery: {
				label: "Galeri mini-ddelweddau",
				title: "Galeri",
				hide: "Cuddio galeri",
				empty: "Dim cynfasau ar gael.",
				unavailable: "Cyfryngau ddim ar gael",
				canvasAlt: "Cynfas {index}"
			},
			dock: {
				gallery: "G",
				collection: "C",
				contents: "C",
				search: "S",
				info: "I",
				annotations: "A",
				tools: "T",
				layers: "L"
			}
		},
		workspace: {
			settings: "Gosodiadau",
			layout: "Cynllun",
			theme: "Thema",
			themeDark: "Tywyll",
			themeLight: "Golau",
			themeSepia: "Sepia",
			themeMidnight: "Canol nos",
			themeRingo: "Ringo",
			closeSettings: "Cau gosodiadau",
			showSettings: "Dangos gosodiadau",
			hideSettings: "Cuddio gosodiadau",
			toggleSettings: "Toglo gosodiadau",
			language: "Iaith",
			viewMode: "Gosodiad Tudalen",
			viewModeSingle: "Sengl",
			viewModePaged: "Ochr yn Ochr",
			viewModeContinuous: "Sgrolio Di-dor",
			viewModeGallery: "Galeri",
			activeViewport: "Porth Gwylio Gweithredol",
			activeViewportHint: "Mae cyd-destun y maniffest yn dilyn ffocws y ffenestr weithredol.",
			canvasPosition: "Cynfas {current} o {total}",
			searchHint: "Mae'r panel chwilio wedi'i rwymo i faniffest y ffenestr weithredol.",
			annotationsHint: "Mae cyd-destun anodi wedi'i rwymo i'r ffenestr weithredol.",
			resizeRows: "Newid maint rhesi'r gweithle",
			resizeColumns: "Newid maint colofnau'r gweithle",
			unavailableMultiView: "Ddim ar gael mewn aml-olwg",
			details: "Manylion y gweithle",
			eyebrow: "Gweithle",
			selectedWindow: "Ffenestr a ddewiswyd",
			none: "Dim",
			singleViewOnly: "Mae metadata, chwilio ac anodiadau ar gael yn y modd un olwg.",
			manifest: "Maniffest",
			pageLayout: {
				group: "Gosodiad tudalen",
				singleAria: "Gosodiad tudalen sengl",
				sideBySideAria: "Gosodiad tudalennau ochr yn ochr",
				continuousAria: "Gosodiad sgrolio di-dor",
				galleryAria: "Gosodiad galeri"
			},
			window: {
				canvasNavigation: "Llywio cynfasau",
				pageNumber: "Rhif tudalen",
				replaceManifest: "Disodli'r maniffest yn y ffenestr hon",
				previousCanvas: "Cynfas blaenorol",
				nextCanvas: "Cynfas nesaf"
			},
			emptySlot: {
				dropZone: "Ffenestr weithle wag",
				dragOrPaste: "Llusgwch faniffest yma neu gludwch ei URL",
				empty: "Gwag",
				placeholder: "URL y maniffest",
				load: "Llwytho maniffest",
				chooseLibrary: "Dewis o'r llyfrgell faniffestau"
			},
			compare: {
				title: "Cymharu",
				close: "Cau cymharu",
				description: "Dewiswch sut mae'r golygon cymharu wedi'u trefnu.",
				group: "Gosodiad cymharu",
				single: "Golwg sengl",
				singleAria: "Gosodiad golwg sengl, 1 wrth 1",
				singleAnnouncement: "Dewiswyd gosodiad golwg sengl",
				sideBySide: "Ochr yn ochr",
				sideBySideAria: "Gosodiad ochr yn ochr, 1 wrth 2",
				sideBySideAnnouncement: "Dewiswyd gosodiad ochr yn ochr",
				stacked: "Wedi'u pentyrru",
				stackedAria: "Gosodiad pentwr, 2 wrth 1",
				stackedAnnouncement: "Dewiswyd gosodiad pentwr",
				oneByTwo: "Un a dau",
				oneByTwoAria: "Gosodiad un a dau, un olwg fawr a dau olwg mewn pentwr",
				oneByTwoAnnouncement: "Dewiswyd y gosodiad un a dau. Mae tri golwg ar agor",
				grid: "Grid",
				gridAria: "Gosodiad grid, 2 wrth 2",
				gridAnnouncement: "Dewiswyd gosodiad grid"
			},
			manifestManager: {
				ariaLabel: "Rheolwr maniffestau IIIF",
				eyebrow: "Gweithle IIIF",
				title: "Llwytho maniffest",
				close: "Cau'r rheolwr maniffestau",
				url: "URL y maniffest",
				urlPlaceholder: "https://enghraifft.org/iiif/manifest.json",
				targetWindow: "Ffenestr darged",
				window: "Ffenestr {number}",
				active: "gweithredol",
				loading: "Wrthi'n llwytho…",
				loadSelected: "Llwytho i'r ffenestr a ddewiswyd",
				load: "Llwytho maniffest",
				replaceAll: "Disodli pob maniffest",
				library: "Llyfrgell",
				resourceCount: "{count} adnodd",
				loadError: "Methu llwytho'r maniffest: {error}",
				remove: "Tynnu o'r llyfrgell",
				removeAria: "Tynnu {label} o'r llyfrgell faniffestau",
				addTitle: "Ychwanegu URL maniffest",
				addDescription: "Gludwch URL maniffest IIIF i'w agor yn y gwyliwr.",
				addUrl: "Ychwanegu URL maniffest",
				search: "Chwilio maniffestau",
				searchPlaceholder: "Chwilio maniffestau, casgliadau neu eiriau allweddol…",
				filterAria: "Hidlo maniffestau",
				all: "Pob un",
				recent: "Diweddar",
				favourites: "Ffefrynnau",
				source: "Ffynhonnell y maniffest",
				allSources: "Pob ffynhonnell",
				unknownSource: "Ffynhonnell anhysbys",
				pasteHint: "Gludwch URL maniffest IIIF neu dewiswch o'ch",
				yourLibrary: "llyfrgell.",
				itemCount: "{count} eitem",
				openAria: "Llwytho {label}",
				favouriteAria: "Toglo {label} fel ffefryn",
				noResults: "Nid oes maniffestau yn cyfateb i'r hidlydd hwn.",
				whatIsIiif: "Beth yw maniffest IIIF?"
			},
			sidebar: {
				navigation: "Llywio'r gwyliwr",
				browse: "Pori",
				gallery: "Galeri",
				metadata: "Metadata",
				search: "Chwilio",
				annotations: "Anodiadau",
				collections: "Casgliadau",
				transcription: "Trawsgrifiad",
				explore: "Archwilio",
				imageLayers: "Haenau delwedd",
				tools: "Offer",
				viewSettings: "Gosodiadau golwg",
				compare: "Cymharu",
				download: "Lawrlwytho",
				share: "Rhannu",
				cite: "Dyfynnu",
				iiifManifests: "Maniffestau IIIF",
				collapse: "Cwympo'r bar ochr",
				workspaceTools: "Offer y gweithle",
				manageIiif: "Rheoli maniffestau IIIF"
			}
		},
		media: { type: {
			image: "Delwedd",
			video: "Fideo",
			audio: "Sain",
			pdf: "PDF",
			model: "3D"
		} },
		renderers: {
			audio: {
				noSource: "Dim ffynhonnell sain.",
				accompanyingLabel: "Delwedd ategol",
				cuesTitle: "Pwyntiau ciw",
				cueFallback: "Ciw"
			},
			video: {
				noSource: "Dim ffynhonnell fideo.",
				cuesTitle: "Ciwiau",
				cueFallback: "Anodiad"
			},
			image: { noSource: "Dim ffynhonnell delwedd ar gael." },
			pdf: {
				noSource: "Dim ffynhonnell PDF.",
				prev: "Blaenorol",
				next: "Nesaf",
				prevAria: "Tudalen flaenorol",
				nextAria: "Tudalen nesaf",
				zoomOut: "Chwyddo -",
				zoomIn: "Chwyddo +",
				zoomOutAria: "Chwyddo allan",
				zoomInAria: "Chwyddo mewn",
				status: "Tudalen {pageNumber} / {pageCount}"
			},
			model: {
				label: "Gwyliwr 3D",
				noSource: "Dim ffynhonnell 3D."
			},
			osd: { label: "Gwyliwr delwedd" }
		},
		plugins: {
			hello: {
				label: "Panel Helo",
				noManifest: "Dim maniffest",
				nextCanvas: "Cynfas nesaf"
			},
			annotation: {
				label: "Ychwanegu anodiad",
				note: "Gollyngwch anodiad cyflym ar y golygfa gyfredol.",
				button: "Ychwanegu anodiad",
				added: "Ychwanegwyd trwy ategyn"
			}
		},
		warnings: {
			invalidConfig: "JSON ffurfweddu annilys ar <mango-viewer>.",
			pluginMissingId: "Rhaid i ViewerPlugin gynnwys id."
		}
	},
	fr: {
		common: {
			closeGlyph: "×",
			emptyValue: "-",
			notAvailable: "N/A"
		},
		storyBuilder: {
			narration: { button: "Narrateur audio" },
			chapters: {
				title: "Chapitres",
				empty: "Positionnez le visualiseur, puis ajoutez un chapitre.",
				edit: "Modifier",
				delete: "Supprimer",
				cancel: "Annuler",
				confirmDelete: "Supprimer ce chapitre ?"
			},
			actions: {
				add: "+ Ajouter un chapitre",
				save: "Enregistrer / Exporter",
				saving: "Enregistrement...",
				saveSuccess: "Enregistré avec succès",
				saveFailed: "Échec de l'enregistrement"
			},
			chapter: {
				header: "Paramètres du chapitre",
				manifestLabel: "URL du manifeste",
				manifestLoad: "Charger / Recharger",
				manifestHint: "Chargez un manifeste pour commencer à capturer des chapitres.",
				language: "Langue",
				narration: "Narration",
				start: "Début (HH:MM:SS)",
				end: "Fin (HH:MM:SS)",
				useCurrentTime: "Utiliser l'heure actuelle",
				preview: "Aperçu du segment",
				markInOut: "Marquer Début / Fin (HH:MM:SS)",
				markIn: "Marquer Début",
				markOut: "Marquer Fin",
				markHint: "Le marquage de fin doit être supérieur au marquage de début pour l'audio / la vidéo.",
				annotation: "Annotation ({lang})",
				advance: "Avance",
				advanceHint: "La lecture automatique passera au chapitre suivant après le délai ci-dessous. Laissez vide pour rester en manuel.",
				advanceDelay: "Délai entre les chapitres (secondes)",
				save: "Enregistrer",
				saveHint: "Sélectionnez un chapitre pour enregistrer les paramètres."
			},
			export: {
				title: "Exporter le JSON de l'histoire",
				copy: "Copier le JSON",
				download: "Télécharger le .json"
			}
		},
		viewer: {
			status: {
				waiting: "En attente d'un manifeste.",
				loading: "Chargement du manifeste...",
				error: "Erreur lors du chargement du manifeste.",
				loaded: "Manifeste chargé."
			},
			brand: {
				title: "Démo du visualiseur IIIF Mango",
				tag: "Mango Shell"
			},
			manifest: {
				label: "Manifeste",
				awaitingId: "En attente de l'ID du manifeste"
			},
			panels: {
				leftLabel: "Panneaux de gauche",
				rightLabel: "Panneaux de droite",
				collection: {
					label: "Panneau de navigation de collection",
					title: "Collection",
					close: "Fermer la navigation de collection",
					error: "Impossible de charger la navigation de collection",
					messages: {
						viewBy: "Afficher par :",
						hierarchy: "Hiérarchie",
						date: "Date",
						loadingDateMetadata: "Chargement des métadonnées de date…",
						loadNextDates: "Charger les {count} dates suivantes",
						loadMissingDate: "Charger {count} date manquante",
						loadMissingDates: "Charger {count} dates manquantes",
						dateNotLoaded: "Date non chargée",
						oneDateNotLoaded: "{count} date non chargée",
						datesNotLoaded: "{count} dates non chargées",
						undated: "Sans date",
						expand: "Développer {label}",
						collapse: "Réduire {label}",
						retry: "{error} — sélectionnez + pour réessayer",
						loadingStructure: "Chargement de la structure IIIF…",
						noResource: "Aucune collection ni aucun manifeste IIIF chargé.",
						noNavigableItems: "Aucun élément navigable.",
						navigationLabel: "Navigation IIIF"
					}
				},
				annotations: {
					label: "Panneau des annotations",
					title: "Annotations",
					export: "Exporter les annotations",
					close: "Fermer l'éditeur d'annotations",
					modes: "Modes d'annotation",
					edit: "Modifier",
					create: "Créer",
					helpEdit: "Cliquez sur une annotation pour la sélectionner et la modifier.",
					helpCreate: "Dessinez sur le canevas pour créer une nouvelle annotation.",
					emptyCreate: "Utilisez la barre d'outils pour ajouter des rectangles ou des notes.",
					emptyList: "Aucune annotation sur ce canevas.",
					fallback: "Annotation",
					keepVisible: "Garder les annotations visibles",
					keepVisibleDescription: "Afficher les annotations après la fermeture de ce panneau.",
					editor: {
						createTitle: "Créer une annotation",
						detailsTitle: "Détails de l'annotation",
						details: "Détails",
						motivation: "Motivation",
						motivations: {
							painting: "peinture (painting)",
							supplementing: "supplément (supplementing)",
							contextualizing: "contextualisation (contextualizing)",
							contentState: "état du contenu (contentState)",
							highlighting: "surlignage (highlighting)",
							commenting: "commentaire (commenting)",
							tagging: "étiquetage (tagging)"
						},
						layer: "Calque",
						layersLabel: "Calques",
						label: "Étiquette",
						labelPlaceholder: "Étiquette de l'annotation",
						text: "Texte",
						textPlaceholder: "Ajouter le contenu textuel de l'annotation...",
						tags: "Mots-clés",
						tagPlaceholder: "Ajouter un mot-clé et appuyer sur Entrée",
						addTag: "Ajouter",
						removeTag: "Supprimer {tag}",
						notes: "Notes",
						privateNotes: "Notes privées",
						notesPlaceholder: "Ajouter des notes de recherche privées...",
						saveAnnotation: "Enregistrer l'annotation",
						saveChanges: "Enregistrer les modifications",
						deleteAnnotation: "Supprimer l'annotation",
						empty: "Sélectionnez une annotation pour inspecter les détails.",
						id: "ID",
						type: "Type",
						searchPlaceholder: "Rechercher des annotations",
						pagination: "{current} sur {total}",
						showLayer: "Afficher le calque",
						hideLayer: "Masquer le calque",
						layers: {
							research: "Notes de recherche",
							transcription: "Transcription",
							highlights: "Surlignages",
							mine: "Mes annotations"
						},
						tools: {
							select: "Sélection / Panoramique",
							rectangle: "Rectangle",
							polygon: "Polygone",
							point: "Point",
							freehand: "Dessin libre",
							line: "Ligne"
						}
					}
				},
				contents: {
					label: "Panneau des contenus",
					title: "Contenus",
					close: "Fermer les contenus",
					tabs: "Onglets de contenus",
					tocTab: "Chapitres",
					transcriptTab: "Transcription",
					tocLabel: "Table des matières",
					transcriptLabel: "Transcription",
					emptyToc: "Aucune table des matières disponible.",
					emptyTranscript: "Aucune transcription disponible.",
					fallback: "Entrée sans titre"
				},
				tools: {
					label: "Panneau d'outils",
					title: "Outils",
					close: "Fermer les outils",
					note: "Les réglages d'image sont disponibles sur les canevas d'image.",
					brightness: "Luminosité",
					contrast: "Contraste",
					saturation: "Saturation",
					effects: "Effets",
					invert: "Inverser",
					grayscale: "Niveaux de gris",
					reset: "Réinitialiser"
				},
				search: {
					label: "Panneau de recherche",
					title: "Recherche",
					close: "Fermer la recherche",
					labelText: "Rechercher des annotations",
					placeholder: "Rechercher des annotations",
					clear: "Effacer",
					hint: "Les correspondances sont surlignées sur le canevas.",
					matchCount_one: "{count} correspondance",
					matchCount_other: "{count} correspondances",
					noMatches: "Aucune correspondance.",
					empty: "Tapez pour rechercher des annotations.",
					hitFallback: "Annotation sans titre"
				},
				metadata: {
					label: "Panneau de métadonnées",
					title: "Métadonnées",
					close: "Fermer les métadonnées",
					attribution: "Attribution",
					license: "Licence",
					empty: "Aucune métadonnée de manifeste disponible.",
					provider: "Ressource fournie par"
				},
				layers: {
					label: "Panneau des calques",
					title: "Calques",
					close: "Fermer les calques"
				}
			},
			stage: {
				label: "Scène du visualiseur",
				loading: "Chargement du manifeste...",
				error: "Impossible de charger le manifeste.",
				empty: "Aucune source média résolue pour ce canevas pour le moment.",
				missingMedia: "Aucun média n'est disponible pour ce canevas.",
				mediaError: "Un problème est survenu lors de l'affichage de ce média.",
				nav: {
					label: "Navigation dans les canevas",
					prev: "Canevas précédent",
					next: "Canevas suivant"
				},
				controls: {
					label: "Contrôles du visualiseur",
					toggleGallery: "Afficher/Masquer la galerie",
					toggleCollection: "Afficher/Masquer la navigation de collection",
					toggleContents: "Afficher/Masquer les contenus",
					toggleSearch: "Afficher/Masquer la recherche",
					toggleMetadata: "Afficher/Masquer les métadonnées",
					toggleAnnotations: "Afficher/Masquer les annotations",
					toggleTools: "Afficher/Masquer les outils",
					showGallery: "Afficher la galerie",
					showCollection: "Afficher la navigation de collection",
					showContents: "Afficher les contenus",
					hideGallery: "Masquer la galerie",
					hideCollection: "Masquer la navigation de collection",
					hideContents: "Masquer les contenus",
					showSearch: "Afficher la recherche",
					hideSearch: "Masquer la recherche",
					showInfo: "Afficher les infos",
					hideInfo: "Masquer les infos",
					showAnnotations: "Afficher les annotations",
					hideAnnotations: "Masquer les annotations",
					showTools: "Afficher les outils",
					hideTools: "Masquer les outils",
					toggleLayers: "Basculer les calques",
					showLayers: "Afficher les calques",
					hideLayers: "Masquer les calques"
				}
			},
			toolbar: {
				label: "Contrôles de scène",
				zoom: "Zoom",
				zoomPercent: "Pourcentage de zoom",
				zoomOut: "Zoom arrière",
				zoomIn: "Zoom avant",
				canvasNumber: "Numéro de canevas",
				home: "Accueil",
				rotateLeft: "Tourner à gauche",
				rotateRight: "Tourner à droite",
				start: "Démarrer",
				stop: "Arrêter",
				pause: "Pause",
				forward: "Avancer de 10 secondes",
				rewind: "Reculer de 10 secondes",
				media: "Média",
				mediaSelect: "Sélectionner la source média"
			},
			gallery: {
				label: "Galerie de vignettes",
				title: "Galerie",
				hide: "Masquer la galerie",
				empty: "Aucun canevas disponible.",
				unavailable: "Média indisponible",
				canvasAlt: "Canevas {index}"
			},
			dock: {
				gallery: "G",
				collection: "C",
				contents: "C",
				search: "R",
				info: "I",
				annotations: "A",
				tools: "O",
				layers: "L"
			}
		},
		workspace: {
			settings: "Paramètres",
			layout: "Disposition",
			theme: "Thème",
			themeDark: "Sombre",
			themeLight: "Clair",
			themeSepia: "Sépia",
			themeMidnight: "Minuit",
			themeRingo: "Ringo",
			closeSettings: "Fermer les paramètres",
			showSettings: "Afficher les paramètres",
			hideSettings: "Masquer les paramètres",
			toggleSettings: "Afficher ou masquer les paramètres",
			language: "Langue",
			viewMode: "Mise en page",
			viewModeSingle: "Simple",
			viewModePaged: "Double page",
			viewModeContinuous: "Défilement continu",
			viewModeGallery: "Galerie",
			activeViewport: "Fenêtre active",
			activeViewportHint: "Le contexte du manifeste suit le focus de la fenêtre active.",
			canvasPosition: "Canevas {current} sur {total}",
			searchHint: "Le panneau de recherche est lié au manifeste de la fenêtre active.",
			annotationsHint: "Le contexte d'annotation est lié à la fenêtre active.",
			resizeRows: "Redimensionner les lignes de l'espace de travail",
			resizeColumns: "Redimensionner les colonnes de l'espace de travail",
			unavailableMultiView: "Indisponible en vue multiple",
			details: "Détails de l'espace de travail",
			eyebrow: "Espace de travail",
			selectedWindow: "Fenêtre sélectionnée",
			none: "Aucune",
			singleViewOnly: "Les métadonnées, la recherche et les annotations sont disponibles en vue unique.",
			manifest: "Manifeste",
			pageLayout: {
				group: "Mise en page",
				singleAria: "Mise en page unique",
				sideBySideAria: "Mise en page côte à côte",
				continuousAria: "Mise en page à défilement continu",
				galleryAria: "Mise en page galerie"
			},
			window: {
				canvasNavigation: "Navigation entre les canevas",
				pageNumber: "Numéro de page",
				replaceManifest: "Remplacer le manifeste de cette fenêtre",
				previousCanvas: "Canevas précédent",
				nextCanvas: "Canevas suivant"
			},
			emptySlot: {
				dropZone: "Fenêtre vide",
				dragOrPaste: "Faites glisser un manifeste ici ou collez son URL",
				empty: "Vide",
				placeholder: "URL du manifeste",
				load: "Charger le manifeste",
				chooseLibrary: "Choisir dans la bibliothèque de manifestes"
			},
			compare: {
				title: "Comparer",
				close: "Fermer la comparaison",
				description: "Choisissez la disposition des vues de comparaison.",
				group: "Disposition de comparaison",
				single: "Vue unique",
				singleAria: "Disposition en vue unique, 1 par 1",
				singleAnnouncement: "Disposition en vue unique sélectionnée",
				sideBySide: "Côte à côte",
				sideBySideAria: "Disposition côte à côte, 1 par 2",
				sideBySideAnnouncement: "Disposition côte à côte sélectionnée",
				stacked: "Empilées",
				stackedAria: "Disposition empilée, 2 par 1",
				stackedAnnouncement: "Disposition empilée sélectionnée",
				oneByTwo: "Un et deux",
				oneByTwoAria: "Disposition un et deux, une grande vue et deux vues empilées",
				oneByTwoAnnouncement: "Disposition un et deux sélectionnée. Trois vues sont ouvertes",
				grid: "Grille",
				gridAria: "Disposition en grille, 2 par 2",
				gridAnnouncement: "Disposition en grille sélectionnée"
			},
			manifestManager: {
				ariaLabel: "Gestionnaire de manifestes IIIF",
				eyebrow: "Espace de travail IIIF",
				title: "Charger un manifeste",
				close: "Fermer le gestionnaire de manifestes",
				url: "URL du manifeste",
				urlPlaceholder: "https://exemple.org/iiif/manifest.json",
				targetWindow: "Fenêtre cible",
				window: "Fenêtre {number}",
				active: "active",
				loading: "Chargement…",
				loadSelected: "Charger dans la fenêtre sélectionnée",
				load: "Charger le manifeste",
				replaceAll: "Remplacer tous les manifestes",
				library: "Bibliothèque",
				resourceCount: "{count} ressources",
				loadError: "Impossible de charger le manifeste : {error}",
				remove: "Retirer de la bibliothèque",
				removeAria: "Retirer {label} de la bibliothèque de manifestes",
				addTitle: "Ajouter l’URL d’un manifeste",
				addDescription: "Collez l’URL d’un manifeste IIIF pour l’ouvrir dans la visionneuse.",
				addUrl: "Ajouter l’URL d’un manifeste",
				search: "Rechercher des manifestes",
				searchPlaceholder: "Rechercher des manifestes, collections ou mots-clés…",
				filterAria: "Filtrer les manifestes",
				all: "Tous",
				recent: "Récents",
				favourites: "Favoris",
				source: "Source du manifeste",
				allSources: "Toutes les sources",
				unknownSource: "Source inconnue",
				pasteHint: "Collez l’URL d’un manifeste IIIF ou choisissez dans votre",
				yourLibrary: "bibliothèque.",
				itemCount: "{count} éléments",
				openAria: "Charger {label}",
				favouriteAria: "Ajouter ou retirer {label} des favoris",
				noResults: "Aucun manifeste ne correspond à ce filtre.",
				whatIsIiif: "Qu’est-ce qu’un manifeste IIIF ?"
			},
			sidebar: {
				navigation: "Navigation de la visionneuse",
				browse: "Parcourir",
				gallery: "Galerie",
				metadata: "Métadonnées",
				search: "Rechercher",
				annotations: "Annotations",
				collections: "Collections",
				transcription: "Transcription",
				explore: "Explorer",
				imageLayers: "Calques d'image",
				tools: "Outils",
				viewSettings: "Paramètres d'affichage",
				compare: "Comparer",
				download: "Télécharger",
				share: "Partager",
				cite: "Citer",
				iiifManifests: "Manifestes IIIF",
				collapse: "Réduire la barre latérale",
				workspaceTools: "Outils de l'espace de travail",
				manageIiif: "Gérer les manifestes IIIF"
			}
		},
		media: { type: {
			image: "Image",
			video: "Vidéo",
			audio: "Audio",
			pdf: "PDF",
			model: "3D"
		} },
		renderers: {
			audio: {
				noSource: "Aucune source audio.",
				accompanyingLabel: "Image d'accompagnement",
				cuesTitle: "Points de repère",
				cueFallback: "Repère"
			},
			video: {
				noSource: "Aucune source vidéo.",
				cuesTitle: "Repères",
				cueFallback: "Annotation"
			},
			image: { noSource: "Aucune source d'image disponible." },
			pdf: {
				noSource: "Aucune source PDF.",
				prev: "Préc.",
				next: "Suiv.",
				prevAria: "Page précédente",
				nextAria: "Page suivante",
				zoomOut: "Zoom -",
				zoomIn: "Zoom +",
				zoomOutAria: "Zoom arrière",
				zoomInAria: "Zoom avant",
				status: "Page {pageNumber} / {pageCount}"
			},
			model: {
				label: "Visualiseur 3D",
				noSource: "Aucune source 3D."
			},
			osd: { label: "Visualiseur d'image" }
		},
		plugins: {
			hello: {
				label: "Panneau d'accueil",
				noManifest: "Aucun manifeste",
				nextCanvas: "Canevas suivant"
			},
			annotation: {
				label: "Ajouter une annotation",
				note: "Déposer une annotation rapide sur la vue actuelle.",
				button: "Ajouter une annotation",
				added: "Ajouté via le plugin"
			}
		},
		warnings: {
			invalidConfig: "JSON de configuration non valide sur <mango-viewer>.",
			pluginMissingId: "Le plugin de visualisation doit inclure un identifiant."
		}
	}
}, i = Object.freeze(Object.keys(r)), a = "en", o = (e) => e.trim().replace("_", "-").toLowerCase(), s = (e) => {
	if (!e) return a;
	let t = o(e);
	if (r[t]) return t;
	let n = t.split("-")[0];
	return n && r[n] ? n : a;
}, c = (e, t) => t.split(".").reduce((e, t) => {
	if (!(!e || typeof e != "object")) return e[t];
}, e), l = (e, t) => t ? e.replace(/\{(\w+)\}/g, (e, n) => {
	let r = t[n];
	return r == null ? e : String(r);
}) : e, u = t(a), d = (e) => {
	u.set(s(e));
}, f = (e, t, i) => {
	let o = c(r[s(i ?? n(u))] ?? r[a], e);
	return typeof o == "string" ? l(o, t) : e;
}, p = e(u, (e) => (t, n) => f(t, n, e));
//#endregion
export { f as i, i as n, p as r, d as t };
