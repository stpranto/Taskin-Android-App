import 'package:flutter/foundation.dart';

class AuthProvider with ChangeNotifier {
  bool _isLoggedIn = false;
  String? _email;

  bool get isLoggedIn => _isLoggedIn;
  String? get email => _email;

  void login(String email, String password) {
    // Implement actual authentication logic here
    _isLoggedIn = true;
    _email = email;
    notifyListeners();
  }

  void logout() {
    _isLoggedIn = false;
    _email = null;
    notifyListeners();
  }
}