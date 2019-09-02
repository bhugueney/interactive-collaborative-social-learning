;;; publish.el --- Publish reveal.js presentation from Org file
;; -*- Mode: Emacs-Lisp -*-
;; -*- coding: utf-8 -*-

;; Copyright (C) 2017, 2018, 2019 Jens Lechtenbörger

;;; License: GPLv3

;;; Commentary:
;; Publication of Org source files to reveal.js uses Org export
;; functionality offered by org-re-reveal and oer-reveal.
;; Initialization code for both is provided by emacs-reveal.
;; Note that org-re-reveal and oer-reveal are available on MELPA.
;;
;; Use this file from its parent directory with the following shell
;; command:
;; emacs --batch --load elisp/publish.el

;;; Code:
(package-initialize)
(setq org-ditaa-jar-path "/usr/share/ditaa/ditaa.jar")
(setq org-plantuml-jar-path
      (expand-file-name "/root/plantuml-1.2019.8/plantuml.jar"))

(require 'oer-reveal)

;; Setup dot.
;; The following supposes that png images are generated into directory img,
;; which needs to exist.
(make-directory "img" t)
(setq oer-reveal-publish-babel-languages '((ditaa . t)(dot . t) (emacs-lisp . t)(latex . t)(plantuml . t))
      org-publish-project-alist
      (list (list "img"
                  :base-directory "img"
                  :base-extension "png\\|svg"
                  :publishing-function 'org-publish-attachment
                  :publishing-directory "./public/img")))

;; Let audio start automatically.
(setq oer-reveal-audio-slideshow-config
      "audioStartAtFragment: true,
audio: {
    advance: -1, autoplay: true, defaultDuration: 0, defaultAudios: false, playerOpacity: 0.8, playerStyle: 'position: fixed; bottom: 9.5vh; left: 0%; width: 30%; height:30px; z-index: 33;' }")

;; Load emacs-reveal.
(add-to-list 'load-path (expand-file-name "~/.emacs.d/elpa/emacs-reveal"))
(condition-case nil
    ;; Either require package with above hard-coded location
    ;; (e.g., in docker) ...
    (require 'emacs-reveal)
  (error
   ;; ... or look for sub-directory "emacs-reveal" of parent project.
   (add-to-list
    'load-path
    (expand-file-name "../../emacs-reveal/" (file-name-directory load-file-name)))
   (require 'emacs-reveal)))

;;(setq org-re-reveal--href-fragment-prefix org-re-reveal--slide-id-prefix)
;; Publish Org files.
(oer-reveal-publish-all)

;;; publish.el ends here
