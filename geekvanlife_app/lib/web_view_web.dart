// Implementation Web avec dart:html
import 'package:flutter/material.dart';
import 'dart:ui' as ui;
import 'dart:html' as html;

class WebIframeView extends StatefulWidget {
  const WebIframeView({super.key});

  @override
  State<WebIframeView> createState() => _WebIframeViewState();
}

class _WebIframeViewState extends State<WebIframeView> {
  final String viewID = 'geekvanlife-iframe';

  @override
  void initState() {
    super.initState();
    
    // Enregistrer la vue iframe
    // ignore: undefined_prefixed_name
    ui.platformViewRegistry.registerViewFactory(
      viewID,
      (int viewId) {
        final iframe = html.IFrameElement()
          ..src = 'https://wolwx.github.io/GeekVanlife/'
          ..style.border = 'none'
          ..style.height = '100%'
          ..style.width = '100%';
        return iframe;
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return HtmlElementView(viewType: viewID);
  }
}

void reloadWebView() {
  html.window.location.reload();
}
