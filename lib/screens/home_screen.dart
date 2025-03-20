import 'package:flutter/material.dart';
import 'menu_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final GridView<Map<String, String>> categories = [
      {'name': 'Christmas Tree', 'icon': '🎄'},
      {'name': 'Lights', 'icon': '💡'},
      {'name': 'Stockings', 'icon': '🧦'},
      {'name': 'Ornaments', 'icon': '🎨'},
      {'name': 'Tinsel', 'icon': '✨'},
      {'name': 'Tree Topper', 'icon': '⭐'},
      {'name': 'Candles', 'icon': '🕯️'},
      {'name': 'Reindeer', 'icon': '🦌'},
      {'name': 'Fireplace Décor', 'icon': '🏠'},
      {'name': 'Book a Stylist', 'icon': '👤'},
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Christmas Shop'),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {
              // Navigate to cart
            },
          ),
        ],
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
        ),
        itemCount: categories.length,
        itemBuilder: (context, index) {
          return InkWell(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => MenuScreen(category: categories[index]['name']!),
                ),
              );
            },
            child: Card(
              elevation: 4,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    categories[index]['icon']!,
                    style: const TextStyle(fontSize: 32),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    categories[index]['name']!,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
