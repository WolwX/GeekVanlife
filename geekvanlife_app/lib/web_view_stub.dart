// Stub pour les plateformes non-web
import 'package:flutter/material.dart';

class WebIframeView extends StatelessWidget {
  const WebIframeView({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text('WebView non disponible'),
    );
  }
}

void reloadWebView() {
  // Ne fait rien sur mobile
}
