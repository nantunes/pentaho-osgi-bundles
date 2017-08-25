/*
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 *
 * Copyright 2002 - 2017 Pentaho Corporation. All rights reserved.
 */

package org.pentaho.osgi.platform.plugin.deployer.impl;

import org.junit.Before;
import org.junit.Test;
import org.osgi.framework.BundleEvent;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/**
 * Created on 4/5/2017.
 */
public class BundleStateManagerTest {
  BundleStateManager bundleStateManager;
  public static final String BUNDLE_COMMON_UI = "common-ui307";

  @Before
  public void setup() {
    bundleStateManager = new BundleStateManager();
  }

  @Test
  public void testIsBundleInstalled() {
    //Set the state to installed
    bundleStateManager.setState( BUNDLE_COMMON_UI, BundleEvent.INSTALLED );
    assertTrue( bundleStateManager.isBundleInstalled( BUNDLE_COMMON_UI ) );

    //Set the state to Uninstalled
    bundleStateManager.setState( BUNDLE_COMMON_UI, BundleEvent.UNINSTALLED );
    assertFalse( bundleStateManager.isBundleInstalled( BUNDLE_COMMON_UI ) );
  }

}
