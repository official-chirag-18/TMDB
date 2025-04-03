package com.tmdb

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
<<<<<<< HEAD

=======
import android.os.Bundle;
>>>>>>> 5052e0b1a024031ca3c2fb67d26b042f3d99c6e3
class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "TMDB"

<<<<<<< HEAD
=======
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }

>>>>>>> 5052e0b1a024031ca3c2fb67d26b042f3d99c6e3
  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
